---
layout: post
title: "NixieFX vs Effekseer in one Three.js scene: setup, determinism and payload, measured"
description: "A hands-on comparison of the NixieFX and Effekseer web runtimes playing side by side in a Three.js r185 scene: integration code, seeded replays, draw calls, download size, and one drag setting that surprised me."
date: 2026-10-09 14:20:00 +0400
---

If you're picking a particle runtime for a Three.js game, two names come up quickly. Effekseer is the established one, with a desktop editor and runtimes for many engines, including the web. NixieFX is newer: a browser editor and an MIT runtime on npm that renders through PixiJS or Three.js.

I didn't want a NixieFX vs Effekseer feature-list comparison, so I put both runtimes into the same Three.js scene and measured what I could reproduce. This post is the setup, the code, and the numbers.

**Versions:** three r185, nixie-fx 0.1.20 from npm, and EffekseerForWebGL 1.70e, the latest build on the project's GitHub releases page. Chrome on a Mac, fixed time steps, seeded.

![Effekseer's Simple_Ring_Shape1 sample on the left and a NixieFX ring burst on the right, 20 frames in, sharing one Three.js grid and camera](/assets/nixiefx-vs-effekseer/both-f20.png)

The two effects are not the same effect. On the left is Effekseer's own `Simple_Ring_Shape1.efk` sample from the release zip. On the right is a ring burst I wrote as NixieFX effect JSON and exported with `npx nixie-fx export .`. Making a matching Effekseer effect needs Effekseer's desktop editor, which I didn't use here. So this is a comparison of the runtimes and their integration, not of two identical effects.

## Step 1: put both in one scene

NixieFX is a normal ES module. Its Three renderer adds objects to a scene you give it, so Three draws them like any other mesh:

```javascript
import { loadVfxExportBundle } from "nixie-fx/export";
import { ThreeVfxRenderer } from "nixie-fx/three";
import manifest from "./vfx/manifest.json";
import ringJson from "./vfx/effects/ring-burst.json";

const bundle = loadVfxExportBundle(
  { manifest, effectsByPath: { "effects/ring-burst.json": ringJson } },
  { requiredBackend: "three3d", requiredEffectIds: ["ring-burst"] },
);
const nixie = new ThreeVfxRenderer({ scene, camera });
nixie.createEffect(bundle.effectsById.get("ring-burst"), { position: [4, 0, 0], seed: 7 });

// every frame
nixie.update(dt); // seconds
```

Effekseer ships as a classic script plus a WebAssembly file. It compiles the wasm, then draws straight into Three's WebGL context outside the scene graph:

```javascript
effekseer.initRuntime("/effekseer/effekseer.wasm", () => {
  const ctx = effekseer.createContext();
  ctx.init(renderer.getContext());
  ctx.setRestorationOfStatesFlag(false); // fast path from the official sample
  const ring = ctx.loadEffect("/effekseer/Resources/Simple_Ring_Shape1.efk", 1.0, () => {
    const handle = ctx.play(ring, -4, 0, 0);
    handle.setRandomSeed(7);
  });

  // every frame, after renderer.render(scene, camera)
  ctx.update(dt * 60); // Effekseer counts 60 fps frames, not seconds
  ctx.setProjectionMatrix(camera.projectionMatrix.elements);
  ctx.setCameraMatrix(camera.matrixWorldInverse.elements);
  ctx.draw();
  renderer.resetState(); // Effekseer changed GL state behind Three's back
});
```

Three differences show up in that code:

- **Time units.** `nixie.update()` takes seconds. Effekseer's `update()` takes 60 fps frames, so you multiply.
- **Who draws.** NixieFX objects live in the Three scene, so `renderer.info` counts them and Three sorts them with your other transparent objects. Effekseer draws after Three, in its own pass. You call `resetState()` afterwards, and Three's stats don't see those draws.
- **Startup.** Effekseer's runtime loads asynchronously. Compiling the 1.2 MB wasm took 39 to 54 ms in three runs from a local server. NixieFX has no separate runtime load: it's part of your JavaScript bundle, and creating the bundle and renderer took under 1 ms. The parse cost of that code is inside your main bundle instead, and I didn't measure it separately.

## Step 2: measure what's comparable

I added a `?measure=1` mode to the demo that steps both runtimes on a fixed clock and records:

| | NixieFX 0.1.20 | EffekseerForWebGL 1.70e |
|---|---|---|
| Runtime download, minified | 200 KB JS (three excluded) | 194 KB JS + 1.2 MB wasm |
| Runtime download, gzip -9 | 60 KB | 41 KB + 300 KB |
| This effect's file | 91 KB JSON (5.7 KB gzipped) | 3.4 KB `.efk` binary |
| Same seed twice, frame 20 | identical pixels | identical pixels (Laser01 sample) |
| Different seed | different pixels | different pixels (Laser01 sample) |
| GL draw calls, 1 instance | 2 | 1 |
| GL draw calls, 20 instances | 40 | 1 |

How each row was measured:

- **Sizes.** For NixieFX I bundled `nixie-fx/export` and `nixie-fx/three` with esbuild, minified, with `three` marked external. Effekseer's numbers are the release files as shipped.
- **Determinism.** I rendered each runtime alone after one warm-up run and hashed the framebuffer. The ring sample has no random parameters, so seeds don't change it. That's why I used Effekseer's `Laser01.efk` sample for the seed test.
- **Draw calls.** I wrapped `drawArrays` and `drawElements` on the WebGL context and counted every call, whichever library made it. NixieFX draws once per emitter per instance, and my effect has two emitters. In this sample, Effekseer batched all 20 rings into a single call.

nixie-fx also ships a `ThreeVfxBatcher` for merging billboard draws. I didn't get it to merge anything in this scene in a quick try, so the 40 is unbatched.

I didn't publish a CPU-time comparison. The two effects have different particle counts, so a millisecond number would mostly measure the effects, not the runtimes.

## The drag setting that pulls particles back

One finding is about NixieFX alone. My first ring burst used `drag: 2.5` with a 0.7 to 1.0 s lifetime. The sparks flew out, stopped, and slid back onto the ring they spawned from.

The 0.1.20 simulation applies drag as a factor on displacement: `position = start + velocity × t × max(0, 1 − drag × t)`. Displacement peaks at `t = 1 / (2 × drag)` and returns to the start at `t = 1 / drag`. I traced one spark at 6-frame steps:

| drag, lifetime | distance from centre over time |
|---|---|
| 0, 1.0 s | 0.98 → 1.68 → 2.37 → 3.07 → … → 7.25, keeps going |
| 2.5, 1.0 s | 0.86 → 1.09 → 0.98 → 0.51 → 0.40 → stays at the spawn ring |
| 0.8, 0.5–0.6 s | 0.94 → 1.49 → 1.93 → 2.25 → 2.47 → 2.69, then dies |

The rule I now follow: keep the lifetime at or under `1 / (2 × drag)` if you want particles to slow down without coming back. The final effect uses drag 0.8 and 0.5 to 0.6 s.

## What's supported where

On the NixieFX side, the export writes a per-backend support report into `manifest.json`. This ring burst is "supported" on both `three3d` and `pixi2d`. When I switched other modules on one at a time, the export marked lights and sub-emitters as **blocked** on `three3d`. Trails, noise, collision, texture sheet animation, custom data, external forces, force over lifetime, size by speed and colour by speed came back **partial**. The [NixieFX runtime reference](https://nixiefx.com/vfx-runtime-docs/) lists what each backend approximates.

On the Effekseer side, I only checked what I ran: the two samples render correctly in Three r185 with the documented `resetState()` call. EffekseerForWebGL draws into a raw WebGL context. Using it inside a PixiJS app would mean sharing Pixi's context yourself, which I didn't try.

## Reproduce it

1. Download `EffekseerForWebGL170e.zip` from the effekseer/EffekseerForWebGL releases page and copy `effekseer.min.js`, `effekseer.wasm` and `Resources/` into `public/effekseer/`.
2. `npm install three@0.185.0 nixie-fx@0.1.20 vite`
3. Write your NixieFX effect JSON and run `npx nixie-fx export .`
4. Load the scene with `?measure=1` and read `window.measured`.

## Limits

- **Different effects.** The size and draw-call rows describe these two effects, not every effect.
- **One machine.** Chrome on a Mac. The startup times will differ on phones.
- **Effekseer's web build is from May 2023.** It still works with Three r185 in this test, but check the repository's activity if long-term support matters to you.
- **No editor comparison.** Effekseer's editor is a desktop app; NixieFX's runs in the browser and saves JSON to your project folder. I didn't test either editor here.

For a Three.js game that wants one effect format for both 3D scenes and a PixiJS UI, NixieFX's single JSON bundle is the simpler integration. If you already author in Effekseer, its web runtime plays your existing `.efk` files and batched these 20 rings into one draw call. The cost is about 340 KB gzipped of runtime download and a separate pass outside Three's scene.
