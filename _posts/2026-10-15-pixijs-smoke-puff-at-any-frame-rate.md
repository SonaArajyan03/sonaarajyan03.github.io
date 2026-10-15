---
layout: post
title: "A PixiJS smoke puff that looks the same at 30, 60 and 120 fps, and the one frame that breaks it"
description: "Building a soft smoke puff for PixiJS 8 with NixieFX, then stepping it at 30, 60, 120 and variable frame rates. It holds up, except when a single long frame skips the end of its emitter."
date: 2026-10-15 17:05:00 +0400
published: true
task_id: N-209
---
![Six frames of a grey smoke puff on a dark sky above a green ground strip. Top row: the puff at 0.10, 0.30 and 0.90 seconds at 60 fps, growing and fading. Bottom row: the same moment, 0.50 seconds, stepped at 30, 60 and 120 fps. The three bottom frames are almost identical.](/assets/smoke-puff-fps/smoke-puff-fps.png)

A smoke puff is the effect you add when something lands, hits the floor or appears. It's small, it plays thousands of times, and players see it on very different screens: a 60 Hz laptop, a 120 Hz phone, an old tablet that drops to 30. If the puff is twice as big on one of them, it reads as a bug.

So I built one for PixiJS 8 and then did the boring thing: stepped the same seeded puff at different frame rates and measured it. It mostly held up. The case that didn't was a single long frame, which any game gets when the tab hitches or the garbage collector runs.

Everything below was run with `nixie-fx` 0.1.20 and `pixi.js` 8.22.0 in Chromium.

## The puff

I authored it in NixieFX, a browser-based pixi js particle editor that saves effects as JSON and exports a bundle for its runtime. The fields that shape the puff:

```json
{
  "duration": 0.25,
  "spawn": {
    "bursts": [{ "time": 0, "count": 12 }],
    "rate": 48,
    "shape": "sphere", "radius": 0.12
  },
  "initializeParticle": {
    "lifetime": { "mode": "random", "min": 0.7, "max": 1.1 },
    "size": { "mode": "random", "min": 0.18, "max": 0.3 },
    "velocity": { "mode": "vector", "min": [-1.6, 0.4, 0], "max": [1.6, 1.5, 0] }
  },
  "billboard": {
    "softness": 0.9,
    "sizeValue": { "mode": "curve", "curve": [{ "x": 0, "y": 0.6 }, { "x": 1, "y": 2.2 }] }
  },
  "forces": { "drag": 1.2, "gravity": -0.4 },
  "render": { "blend": "alpha" }
}
```

What each part does:

- **12 particles at once, then 48 per second for 0.25 s.** The burst gives the "pop". The short trickle after it fills the cloud in so it doesn't look like twelve separate balls.
- **Size curve from 0.6× to 2.2×.** Smoke grows as it spreads. Without this it reads as dust.
- **Drag 1.2 with a small negative gravity.** Particles leave fast, slow down quickly, and drift slightly up. My first version had drag 2.5 and the puff barely spread at all: a tight ball that only grew in place.
- **Alpha blending, soft edges, grey colours.** The alpha ramps from 0 to 0.7 in the first 10% of life, eases to 0.45, then fades out. Additive blending would brighten every spot where puffs overlap, which reads as glow, not smoke.

The export reports the effect as `supported` on both the PixiJS and Three.js backends.

## Stepping it at different frame rates

The test is simple: same effect, same seed (7), stepped with `vfx.update(dt)` at different `dt` values, and sampled at the same moments. I recorded the live particle count, the centre of the cloud, its spread, and the average particle width, all in screen pixels at 80 pixels per unit.

At 0.50 s:

| Stepping | Particles | Centre (x, y) | Spread x | Avg width |
|---|---|---|---|---|
| 30 fps | 23 | 237.9, 198.5 | 15.1 px | 26.0 px |
| 60 fps | 24 | 237.7, 198.8 | 14.8 px | 26.3 px |
| 120 fps | 24 | 237.7, 198.7 | 14.8 px | 26.5 px |
| random 40–140 fps | 23 | 237.9, 198.1 | 15.1 px | 26.6 px |

That's within a pixel and one particle across a 4× range of frame rates, including a run where every frame had a random length. The bottom row of the image is these three frames side by side. Running the 60 fps case twice gave identical pixels.

The only visible difference was in the first tenth of a second. At 0.10 s the average alpha was 0.335 at 30 fps and 0.442 at 120 fps, while the particle count was the same (16). My guess is the very short fade-in at the start of each particle's life, but I didn't confirm it. By 0.25 s the numbers line up again.

## The frame that breaks it

Then I tried one long frame: three normal 1/60 s frames, then a single 0.25 s frame, then normal frames again.

| Stepping | Particles at 0.50 s | At 1.00 s |
|---|---|---|
| 60 fps | 24 | 15 |
| 60 fps with one 0.25 s frame | **14** | **8** |

Ten particles never appeared. The reason is in how the emitter decides whether it's still emitting. Its duration is 0.25 s, and the check uses the emitter's age at the end of the frame. The long frame takes the age from 0.05 s to 0.30 s, which is past the end, so that frame doesn't emit at all. Everything the rate-over-time part should have spawned in that window is lost. The puff that results is thinner and patchier, and it's exactly the puff players see right after a stutter.

Two fixes, both measured with the same long frame:

| Fix | Particles at 0.50 s |
|---|---|
| Split long frames into steps of at most 1/30 s | 24, and the same centre as 60 fps |
| Make the puff all-burst (24 at t = 0, no rate) | 24 |

Splitting is a small change in the game loop and protects every effect, not just this one:

```javascript
const MAX_STEP = 1 / 30;

app.ticker.add((ticker) => {
  let left = ticker.deltaMS / 1000;
  while (left > 0) {
    const step = Math.min(left, MAX_STEP);
    vfx.update(step);
    left -= step;
  }
});
```

If you'd rather not touch the loop, the all-burst version is safe by construction. It loses the trickle, so the cloud reads slightly more like a single pop.

The NixieFX guide to [PixiJS particle effects for game UI](https://nixiefx.com/pixijs-particle-effects/) shows the basic setup: load the bundle, parent `PixiVfxRenderer` to your stage, and call `update()` from `app.ticker`. The split above is what I'd add to that loop for effects with short emitters.

## Checklist for a puff that has to survive any screen

- Step it at 30, 60 and 120 fps with the same seed and compare counts and size, not just screenshots.
- Test one long frame (0.2–0.3 s), especially if the emitter's duration is short.
- Split long frames in the ticker, or keep short effects to bursts.
- Use alpha blending for smoke. Additive is for glow.
- Grow the particles over their life, and let drag do the slowing down.

## Limits

- I tested one effect in PixiJS only. The export says Three.js is supported, but I didn't step the Three.js renderer for this post.
- Particles were drawn as soft circles with no texture. A real smoke texture changes the look, not the timing results.
- The variable-frame-rate run used one seeded sequence of frame lengths. Other sequences will differ in the last particle or two.
- Splitting long frames costs CPU on exactly the frames that are already slow. For a handful of small effects that's cheap; for hundreds, measure it.
