---
layout: post
title: "A PixiJS cursor trail that doesn't break up when you flick the mouse"
description: "Building a particle cursor trail in PixiJS 8 with NixieFX: spawn by distance, not time, and sub-step fast pointer moves so the trail stays even."
date: 2026-10-05 12:00:00 +0400
---

A cursor trail looks like a ten-minute effect: follow the pointer, spawn particles, fade them out. It mostly is. But two details decide whether it feels right. One is what happens when the cursor stops. The other is what happens when someone flicks the mouse across the screen.

This post builds the trail in PixiJS 8 with the NixieFX particle runtime, shows both problems with real captures, and fixes them. The live demo is [here](/demos/cursor-trail/). Move the mouse over it, or drag a finger on a phone.


## Setup

- `pixi.js` 8.22.0 and `nixie-fx` 0.1.17, WebGL renderer
- One machine and one Chromium-based browser for the measurements
- Effects created with `npx nixie-fx effect create --profile pixi-ui-2d`, then edited, validated and exported with the CLI

The trail effect is one looping emitter: a small circle spawn shape, random speed 0.05 to 0.45 units/s in all directions, random lifetime 0.3 to 0.6 s, size shrinking from 0.16 to 0.01 units, a pale cyan to violet color fade, and additive blending. At 60 px per unit, that's dots about 10 px across that drift a little and fade out within half a second.

I set these numbers directly in the effect JSON so the post is reproducible. In practice you'd tune them by eye in a pixi js particle editor, and the NixieFX [PixiJS particle effects guide](https://nixiefx.com/pixijs-particle-effects/) covers that editor workflow and the export bundle the demo loads.

## Spawn by distance, not by time

Most emitters spawn a fixed number of particles per second. For a trail, that's the wrong unit. NixieFX has a second setting, rate over distance, that spawns particles per unit the emitter moves. I made two versions of the same effect:

- `trail-time`: 120 particles per second, rate over distance 0
- `trail-distance`: rate over time 0, 20 particles per unit moved (one every 3 px or so)

Both use world simulation space, so particles stay where they were born instead of following the emitter.

Then I moved each emitter along a 560 px wide S-shaped path in fixed 1/60 s steps, slowly (1.6 s for the whole path) and fast (0.2 s), and captured the frame at the end.

![Four captures: rate over distance and rate over time, each slow and fast](/assets/cursor-trail/distance-vs-time.png)

| Run | Live particles | Largest horizontal gap |
|---|---|---|
| Rate over distance, slow | 62 | 11.3 px |
| Rate over distance, fast | 182 | 42.2 px |
| Rate over time, slow | 54 | 25.9 px |
| Rate over time, fast | 24 | 49.7 px |

Rate over time thins out as the cursor speeds up, because the same 120 particles a second get spread over a longer distance. Rate over distance keeps up with the count. On the fast run it spawned 182 particles where rate over time managed 24.

The bigger difference shows up when the cursor stops. I held each emitter still for one second after the slow run:

![One second after the cursor stops: nothing left with rate over distance, a blob with rate over time](/assets/cursor-trail/after-stop.png)

Rate over distance had 0 particles left. Rate over time had 52, piled up in a blob under the cursor. That blob is the classic sign of a time-based trail, and for a cursor it's almost never what you want.

## The fast-flick problem

Look at the fast rate-over-distance capture again. There are plenty of particles, but they sit in clumps about 50 px apart.

The cause is how the emitter moves. Pointer events arrive about once per frame, so a fast flick moves the emitter in big jumps. In my captures with this runtime version, the particles earned by that jump all appeared at the new position, not spread along the line it travelled. Twelve frames meant twelve clumps.

The fix is to split each frame's movement into short sub-steps, and move the emitter and advance the simulation once per sub-step:

```js
const PPU = 60;          // pixels per effect unit
const MAX_STEP_PX = 6;   // longest jump the emitter makes in one update
let target = null;       // latest pointer position, in pixels
let last = null;         // where the emitter was after the previous frame

app.stage.eventMode = "static";
app.stage.hitArea = app.screen;
app.stage.on("pointermove", (e) => { target = [e.global.x, e.global.y]; });
// Leaving and re-entering shouldn't draw a streak between the two points.
app.canvas.addEventListener("pointerleave", () => { target = null; last = null; });

function step(dt) {
  if (!target) return vfx.update(dt);
  const [lx, ly] = last ?? target;
  const [x, y] = target;
  const n = Math.max(1, Math.ceil(Math.hypot(x - lx, y - ly) / MAX_STEP_PX));
  let stats;
  for (let i = 1; i <= n; i++) {
    trail.setPosition([(lx + ((x - lx) * i) / n) / PPU, (ly + ((y - ly) * i) / n) / PPU, 0]);
    stats = vfx.update(dt / n);
  }
  last = target;
  return stats;
}

app.ticker.add((ticker) => step(ticker.deltaMS / 1000));
```

`vfx` is a `PixiVfxRenderer` with a 2D projection (`pixelsPerUnit: 60`, `yAxis: "down"`, origin at the top left), and `trail` is the instance from `vfx.createEffect(...)`. The projection is what lets pointer pixels divided by 60 map straight to effect units.

Same fast path, same effect, with 6 px sub-steps:

![Fast flick, before and after sub-stepping](/assets/cursor-trail/substeps.png)

The largest horizontal gap dropped from 42.2 px to 11.7 px, and the count went from 182 to 198. The cost is more `update()` calls on fast frames. A 50 px jump becomes 9 updates instead of 1. On a still or slow cursor, nothing changes.

## Reduced motion

The demo creates the effect with `autoStart: false` when `prefers-reduced-motion: reduce` is set. I checked that directly: moving a non-started instance 30 times produced 0 particles, against 49 for a started one. Only the trail is switched off. The pointer still works as normal.

## Limits

- **Measured on one machine and one browser.** Particle counts come from the simulation and shouldn't depend on the GPU, but I haven't checked other browsers.
- **The gap figure is horizontal only.** I sorted particles by x and took the largest jump. It's a quick proxy for "clumpy", not a full spacing analysis.
- **I didn't use the trails (ribbon) module.** The validator reports it as only partly supported by the runtime export on Pixi, so a dotted particle trail is the safer choice there.
- **Settings that don't carry over to Pixi:** the validator notes that `depthTest` and `depthInk` export as 2.5D draw-order rules, not a real depth buffer. Per the NixieFX docs, lit shading and mesh-surface emission aren't supported on the Pixi backend either.
- **Touch wasn't tested on a device.** Pixi reports touch as pointer events, so the same code path runs, but my test input was synthetic pointer events in a desktop browser.

The full demo source is in this site's `demos/cursor-trail` folder: `index.html`, `main.js`, and the exported effect JSON.
