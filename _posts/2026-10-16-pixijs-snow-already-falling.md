---
layout: post
title: "PixiJS snow that's already falling on the first frame, and still covers the screen after a resize"
description: "A snow weather effect for PixiJS 8 built with NixieFX: prewarming it without a seek() call, which step sizes are safe, what wind does to coverage, and keeping it full-width when the canvas resizes."
date: 2026-10-16 14:30:00 +0400
published: true
task_id: N-213
---
![Two frames of the same snowy city scene. Left: one second after the scene starts, a thin band of flakes only at the top of the sky. Right: the first frame after an 8 second prewarm, flakes spread from the top of the sky down to the ground.](/assets/pixijs-snow-already-falling/snow-cold-vs-prewarmed.png)

Snow is one of the easiest weather effects to build: a strip of emitters above the screen, flakes falling slowly, a bit of sideways drift. It's also easy to get two things wrong that players notice straight away. The level loads and the sky is empty for several seconds while the first flakes fall. Or the window gets wider and the new part of the screen has no snow at all.

This post builds a PixiJS 8 snow effect with NixieFX and fixes both. Everything was measured with PixiJS 8.22.0 and nixie-fx 0.1.21 in headless Chrome 155 on macOS, stepping a fixed clock so the numbers repeat.

## The effect

The effect file is a NixieFX project file, built from the package's default effect and exported with the CLI. If you'd rather tune it by eye, NixieFX is also a visual pixi js particle editor that saves the same JSON. The parts that matter:

- **Spawn:** a `box` 6.4 units wide and 0.02 tall, placed just above the top edge. At 100 px per unit, that's the full 640 px width.
- **Rate:** 40 flakes per second, looping, with `maxParticles` 400.
- **Motion:** a starting velocity of 0.6 to 0.9 units/s downward and ±0.1 sideways, plus `externalForces.wind` of 0.15 units/s to the right and a `noise` module for sway.
- **Look:** 3 to 8 px flakes that fade in over the first 8% of their life and out over the last 10%, with a 5.5 to 7 s lifetime.

The export marks it **partial** for Pixi, and the warnings are worth reading:

```text
warning [unsupported-module] snow.json:emitters.0.modules.externalForces: externalForces has partial runtime export support; validate authored subfields before shipping.
warning [unsupported-module] snow.json:emitters.0.modules.noise: noise has partial runtime export support; validate authored subfields before shipping.
```

"Validate before shipping", so I did. With the same seed and 8 s of simulation, the flakes' mean x position was 414 px with wind and noise on and 319 px with both off. So on Pixi the drift is real, about 95 px over 8 s. One oddity: `collectVfxBackendSupportReports()`, called in code on the same effect, reported `supported` with no warnings. Read the CLI's validation output, not only that report.

## Problem 1: the sky starts empty

Created on the first frame and played at 60 fps, the snow takes about five seconds to fill the screen:

| Time | Flakes on screen | Lowest flake |
|---|---|---|
| 0.5 s | 8 | 16 px |
| 1 s | 30 | 58 px |
| 2 s | 68 | 144 px |
| 3 s | 105 | 220 px |
| 5 s | 165 | 344 px |
| 8 s | 180 | 354 px |

The screen is 360 px tall. For the first two seconds, everything is in the top 40% of the sky.

## Prewarm without `seek()`

The Pixi effect instance in 0.1.21 has no `seek()` and the effect format has no prewarm setting. What it does have is `update(dt, { draw: false })`, so you can simulate time before the first frame without drawing it:

```js
const snowFx = vfx.createEffect(snow, { position: [3.2, 3.75, 0], seed: 11 });

// Simulate 8 s before the player sees anything, in 1/30 s steps.
for (let t = 0; t < 8; t += 1 / 30) vfx.update(1 / 30, { draw: false });
vfx.update(0); // draw once at the prewarmed state

app.ticker.add((ticker) => vfx.update(ticker.deltaMS / 1000));
```

The first frame after that is the right-hand image above. How big a step you can take turned out to matter more than I expected. Each run simulates the same 8 s:

| Step | Steps | Flakes on screen | Top / 2nd / 3rd / bottom quarter |
|---|---|---|---|
| 1/60 s | 480 | 180 | 51 / 48 / 44 / 37 |
| 1/30 s | 240 | 180 | 51 / 48 / 44 / 37 |
| 0.1 s | 80 | 180 | 53 / 48 / 42 / 37 |
| 0.25 s | 32 | 180 | 52 / 47 / 48 / 33 |
| 1 s | 8 | 167 | 37 / 51 / 47 / 32 |
| 8 s | 1 | **0** | 0 / 0 / 0 / 0 |

Up to 0.1 s, the result matches playing the 8 s live at 60 fps (180 flakes, 51/48/44/37). At 1 s steps the top of the sky thins out. With one 8 s step, 320 flakes are alive and none are visible. A probe showed all of them sitting on the spawn strip above the screen with alpha 0. The emitter creates the whole interval's flakes in that one update but doesn't spread their ages across it, so they all start at age 0, in the same place, before their fade-in.

Cost is small. The 1/30 s prewarm took 1.3 ms and the 1/60 s one 2.6 ms in this headless run. That's one machine with a software renderer, so treat it as an order of magnitude, not a benchmark.

## Problem 2: wind leaves the upwind edge thin

With wind blowing right, flakes born at the left edge drift into the middle, and nothing replaces them. After 20 s, the left third of the screen had 40 flakes against 67 in the right third. Widening the strip by one unit and shifting it half a unit upwind evened it out to 45 / 53 / 58. It also spreads the same 40 flakes per second over a wider strip, so there were slightly fewer on screen (156 vs 169). Raise `rate` by the same ratio if you want the old density back.

## Problem 3: a resize leaves the new area empty

![Two wide frames of the same scene after the canvas grows from 640 to 960 px. Top: the right third has very few flakes. Bottom: flakes cover the full width.](/assets/pixijs-snow-already-falling/snow-resize.png)

The emitter strip is part of the effect, so `app.renderer.resize(960, 360)` doesn't widen it. Six seconds after resizing, the right third of the wider screen had 19 flakes against 110 in the middle.

The fix is to swap in a definition with a wider strip and recentre the instance:

```js
function onResize(widthPx) {
  app.renderer.resize(widthPx, 360);
  const wide = structuredClone(snow);
  wide.emitters[0].spawn.box[0] = widthPx / 100;   // strip as wide as the screen
  snowFx.updateDefinition(wide);
  snowFx.setPosition([widthPx / 200, 3.75, 0]);    // centre of the new width
}
```

`updateDefinition()` kept the flakes already in the air (248 alive before, 248 just after), so there's no visible reset. Six seconds later, the thirds were 53 / 68 / 66.

## Checklist

- Prewarm with `update(dt, { draw: false })` in steps of 0.1 s or less, for about one flake lifetime.
- Don't prewarm in one big step: every flake starts at age 0 on the spawn strip.
- With wind, widen the strip on the upwind side.
- On resize, update the strip width with `updateDefinition()` and recentre the instance.
- Read the CLI's validation warnings for partial modules and check them in the running game.

The NixieFX guide to [PixiJS particle effects](https://nixiefx.com/pixijs-particle-effects/) covers the setup this builds on: loading the bundle, parenting `PixiVfxRenderer` to the stage, and calling `update()` from the ticker.

## Limits

- One effect, one machine, a software renderer, fixed time steps. Real frame times vary.
- The thirds and quarters are counts from one seed. They show the pattern, not exact densities.
- Pixi only. I didn't run this effect on the Three.js renderer.
- The flakes don't land or settle anywhere. They fade out at the end of their life, near the ground. Snow that piles up needs a different technique.
- `noise` and `externalForces` are partial modules. I checked that they move flakes on Pixi, not that every subfield of them works.
