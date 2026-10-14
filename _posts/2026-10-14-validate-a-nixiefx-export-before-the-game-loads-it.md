---
layout: post
title: "Validate a NixieFX export before the game loads it"
description: "One exported VFX bundle, loaded as exported and in eight other setups. What the loader catches, what it lets through, and the checks worth adding to CI."
date: 2026-10-14 23:00:00 +0400
published: true
task_id: N-557
---

An exported particle bundle is a small deploy artifact: a `manifest.json`, one JSON file per effect, and whatever textures the effects use. When something is wrong with it, you want the game to fail at load time with a clear message, not show an empty explosion in the middle of a level.

I exported one bundle from a NixieFX project and loaded it with `loadVfxExportBundle` from `nixie-fx/export`, first as exported and then in eight other setups. Everything below was run in Node with nixie-fx 0.1.20. The error messages are copied from the output.

## The bundle

Four effects, exported with `npx nixie-fx export .`:

| Effect | What's in it | pixi2d | three3d |
|---|---|---|---|
| `hit-sparks` | 24-spark burst | supported | supported |
| `hit-sparks-textured` | same, with `textures/spark.png` | supported | supported |
| `hit-sparks-lit` | same, with the lights module on | partial | **blocked** |
| `snow` | looping snow | supported | supported |

The lit variant is there on purpose. A shared bundle for a 2D layer and a 3D scene can easily contain one effect that only one renderer can draw.

The loading code is the usual one:

```js
import { loadVfxExportBundle } from 'nixie-fx/export';

const bundle = loadVfxExportBundle(
  { manifest, effectsByPath, assetPaths },
  { requiredBackend: 'pixi2d', requireEveryAsset: true },
);
```

## What the loader caught

| Case | Result |
|---|---|
| A. As exported, `pixi2d`, `requireEveryAsset: true` | loads all 4 effects |
| B. As exported, `three3d` | `Effect "hit-sparks-lit" is blocked on required backend "three3d".` |
| D. One effect file missing from the deploy | `Official VFX export is missing effects/hit-sparks-textured.json.` |
| E. Texture missing, `requireEveryAsset: true` | `Official VFX export is missing asset textures/spark.png.` |
| G. Game asks for `hit-spark` (typo) | `Official VFX export is missing required effect "hit-spark".` |
| H. Manifest `version` edited to 2 | `VFX export manifest version must be 1; received 2.` |
| I. `snow.json` overwritten with the hit-sparks file | `Official VFX effect effects/snow.json does not match its manifest entry (id, sourceEffectId, sourceHash).` |

That's a good set of checks. A partial upload, a typo in an effect id, a hand-edited manifest and a file copied over the wrong name all fail at load, each with a message that names the file.

## What it let through

Three cases didn't behave the way I first assumed.

**C. `requiredEffectIds` doesn't narrow the backend check.** I loaded the bundle for `three3d` and listed only the two effects the scene uses: `requiredEffectIds: ['hit-sparks', 'snow']`. It still failed with the same "blocked" error for `hit-sparks-lit`. One blocked effect anywhere in the bundle stops the whole Three.js load, even when that scene never creates it.

Two ways around it. Export separate bundles for the 2D and 3D layers. Or drop `requiredBackend`, keep `requiredEffectIds`, and check the report yourself for the effects you'll actually create (case J, which loaded):

```js
const bundle = loadVfxExportBundle(
  { manifest, effectsByPath },
  { requiredEffectIds: ['hit-sparks', 'snow'] },
);
for (const id of ['hit-sparks', 'snow']) {
  const status = bundle.effectsById.get(id).support.backends.three3d.status;
  if (status === 'blocked') throw new Error(`${id} is blocked on three3d`);
}
```

The second option is more code, but it ties the check to what the scene uses, not to everything that happens to be in the export.

**F. A missing texture passes unless you ask.** Without `requireEveryAsset: true` and with no list of the files actually deployed, the loader didn't check for `spark.png` at all and loaded all four effects. Then, in a Three.js renderer created without a texture provider, the textured effect still produced 24 particles, and `stats.unsupportedFeatures` and `stats.missingMaterialRefs` were both empty. Nothing tells you the texture never arrived. Pass `assetPaths` with the files that actually exist, and set `requireEveryAsset: true`.

**Stale exports.** I changed the snow emitter's rate in the source file and didn't re-export. The runtime loaded the old bundle without any error, which makes sense: the game only sees the export, not the source. The CLI does see the difference:

```text
$ npx nixie-fx export-status .
hit-sparks-lit.json       exported    hit-sparks-lit
hit-sparks-textured.json  exported    hit-sparks-textured
hit-sparks.json           exported    hit-sparks
snow.json                 stale       snow
3 up to date, 1 stale, 0 unexported, 0 orphaned.
```

`export-status` always exits 0, so a CI step has to read its output (for example, fail when the summary line doesn't say `0 stale`).

## A checklist for CI and for the game

In CI, before the bundle is deployed:

- Run `npx nixie-fx validate .` and `npx nixie-fx export .` from a clean checkout.
- Run `npx nixie-fx export-status .` and fail on any `stale`, `unexported` or `orphaned` count above 0.
- Load the bundle once per renderer you ship, with `requireEveryAsset: true` and the list of asset files in the deploy folder.

In the game, at load time:

- Pass `requiredEffectIds` with the ids your code actually calls, so a typo fails at load.
- Decide per bundle whether `requiredBackend` is right. If a 2D and 3D layer share a bundle, check each needed effect's `support.backends.<backend>.status` instead.
- Treat `partial` as a warning to log, and `blocked` as a reason not to create the effect.

## Limits

- **Node only.** I ran the loader in Node. In the browser, texture loading goes through your texture provider, and I didn't test what a 404 on `spark.png` does there.
- **Lights is the only blocked feature I tried.** Other blocked settings should fail the same way, but I didn't check them.
- **One version.** This is nixie-fx 0.1.20. The loader's messages and options could change between releases, so keep the checks in CI and not only in a blog post.

The [NixieFX documentation](https://nixiefx.com/vfx-runtime-docs/) describes the export bundle and its support reports. The useful habit is to treat the bundle like any other build artifact: validate it where it's produced, and again where it's loaded.
