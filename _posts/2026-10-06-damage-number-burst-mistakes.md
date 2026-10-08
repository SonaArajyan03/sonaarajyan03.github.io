---
layout: post
title: "Five ways a PixiJS damage number burst goes wrong, and how to check for each"
description: "A damage number burst in PixiJS 8 with NixieFX: time units, the y axis, pixels vs effect units, instance cleanup and seeds, each checked with a measurement."
date: 2026-10-06 01:00:00 +0400
---

A damage number with a small burst behind it is one of the first effects most PixiJS games add. The effect itself is rarely the problem. The problems are in the twenty lines that connect it to the game: what time you pass in, which way y points, what units a position is in, and what happens to the burst after it finishes.

I wired a 16-particle hit burst into a PixiJS 8 scene with the NixieFX runtime, then broke the integration on purpose in five common ways and measured what each one does. Everything below comes from those runs, stepped at a fixed 1/60 s so it's repeatable.


## The setup

- `pixi.js` 8.22.0, `nixie-fx` 0.1.17, a 480 × 270 canvas
- The hit lands at pixel (300, 90). Pixi's y axis points down.
- The burst: 16 particles from a small circle, flying outward, warm white to red, 0.18–0.32 s lifetime. It was exported with `npx nixie-fx export` and loaded with `requiredBackend: "pixi2d"`.
- 100 pixels = 1 effect unit

The correct wiring looks like this:

```javascript
const PPU = 100;
const vfx = new PixiVfxRenderer({
  parent: fxLayer, // a Container added BEFORE the number layer
  projection: createPixiVfx2dProjection({
    originX: 0, originY: 0, pixelsPerUnit: PPU, yAxis: "down",
  }),
});

const live = new Set();
let seed = 1;

function onHit(x, y, damage) {
  showNumber(x, y - 22, damage); // your pooled Text / BitmapText
  live.add(vfx.createEffect(burst, { position: [x / PPU, y / PPU, 0], seed: seed++ }));
}

app.ticker.add((ticker) => {
  vfx.update(ticker.deltaMS / 1000); // seconds
  for (const fx of live) {
    if (!fx.isActive) { vfx.removeEffect(fx, true); live.delete(fx); }
  }
});
```

With that, six frames after the hit, all 16 particles were live and on the canvas, centred on (300, 89.6).

![Correct burst: sparks centred on the hit point under the number 27](/assets/damage-burst-mistakes/frame-correct.png)

## Mistake 1: passing milliseconds instead of seconds

Pixi's ticker hands you `deltaMS`, and `vfx.update()` takes seconds. Pass `ticker.deltaMS` straight in and the first frame advances the simulation by 16.7 seconds instead of 0.0167.

Measured after one update:

| What was passed | Live particles | `isActive` |
|---|---|---|
| `1/60` (seconds) | 16 | true |
| `16.67` (milliseconds) | 0 | false |

The burst was born and finished inside one frame, so nothing ever appears. No error, no warning. The number shows and the sparks don't.

![deltaMS bug: the number shows but there are no sparks](/assets/damage-burst-mistakes/frame-deltaMS.png)

**Check:** log `vfx.stats.activeParticles` on the frame after a hit. If it's 0, look at your units first.

## Mistake 2: the projection's y axis points the wrong way

`createPixiVfx2dProjection` defaults to `yAxis: "up"`, which suits effects authored with y up. If your game positions things in Pixi's y-down pixels and you leave the default, the hit at y = 90 maps to y = −90.

| Projection | Particles on canvas | Mean position |
|---|---|---|
| `yAxis: "down"` | 16 of 16 | (300, 89.6) |
| `yAxis: "up"` | 0 of 16 | (300, −89.6) |

The burst plays perfectly, just 180 px above the top edge, where nobody will ever see it.

**Check:** spawn one burst at a known pixel and compare the mean of `vfx.getParticleDebugQuads()` x/y to that pixel.

## Mistake 3: passing pixels as effect units

`position` is in effect units, not pixels. Forget the `/ PPU` and the same hit spawns at (30000, 9000).

| Position passed | Particles on canvas | Mean position |
|---|---|---|
| `[3, 0.9, 0]` | 16 of 16 | (300, 89.6) |
| `[300, 90, 0]` | 0 of 16 | (30000, 8999.6) |

Same symptom as mistakes 1 and 2: nothing on screen. The debug quads tell them apart. Mistake 1 has no particles, while mistakes 2 and 3 have particles in the wrong place.

## Mistake 4: never removing finished bursts

A one-shot burst stops simulating when it's done, but the instance stays in the renderer until you remove it. I fired 10 hits a second for 6 seconds (60 bursts), then let it run one more second.

| | Instances created | Instances still in the renderer | Live particles |
|---|---|---|---|
| Never removed | 60 | 60 | 0 |
| Removed when `!isActive` | 60 | 0 | 0 |

Sixty idle instances and their Pixi containers sit in the scene graph, doing nothing. A boss fight with a fast weapon gets there in seconds, and it keeps growing for as long as the fight lasts.

**Check:** `vfx.stats.effectCount` should drop back to 0 shortly after the last hit.

## Mistake 5: the same seed for every hit

NixieFX is deterministic: the same seed gives the same particle pattern. That's useful for tests and replays, but if every hit uses `seed: 7`, every burst is an identical stamp. I compared particle offsets from the spawn point six frames in:

- seed 7 at x = 120 vs seed 7 at x = 340: **identical** offsets
- seed 7 vs seed 8: different

Players notice a repeated stamp quickly on a weapon that hits several times a second. Increment the seed per hit, or derive it from something like a hit ID if you need replays to match.

## A checklist before you ship it

- [ ] `update()` gets seconds (`deltaMS / 1000`)
- [ ] The projection's `yAxis` matches your game's coordinates
- [ ] Positions are divided by `pixelsPerUnit`
- [ ] Finished instances are removed (`removeEffect(fx, true)` when `!fx.isActive`)
- [ ] Each hit gets its own seed
- [ ] The effect layer is added before the number layer, so sparks never cover the digits

## What the Pixi backend doesn't do

This burst only uses features the Pixi runtime supports. A few settings behave differently there. The validator notes that depth settings (`depthTest`, `depthInk`) export as 2.5D draw order rather than a depth buffer. Per the NixieFX docs, lit shading and mesh-surface emission aren't supported on Pixi.

I tuned this burst by editing its JSON, which is fine for a one-off. If you're adjusting timing and colour by eye across many effects, a pixi js particle editor saves a lot of reloads. The [NixieFX guide to PixiJS particle effects](https://nixiefx.com/pixijs-particle-effects/) covers authoring, exporting and loading a bundle like this one.

## Limits

- One effect, one machine, a desktop browser, fixed-step time. I didn't profile the cost of 60 idle instances. The point here is that they accumulate, not how much they cost.
- Mistakes 1–3 all look the same on screen (nothing appears). The checks above are how to tell them apart.
- Rapid fire raises different problems (overlapping numbers, burst count), which I didn't cover here.
