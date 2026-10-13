---
layout: post
title: "Every hit spark looked the same: seeds for repeated player effects in PixiJS and Three.js"
description: "Without a seed, every NixieFX hit spark is identical. A per-hit seed fixes it, stays replayable, and gives the same motion on PixiJS and Three.js. Measured on 0.1.20."
date: 2026-10-13 12:00:00 +0400
---

Hit sparks fire constantly: every attack, every combo step, sometimes several times a second. If every burst is identical, players notice. The sparks start to look stamped rather than thrown. But fully random bursts have their own cost: replays, automated tests and bug reports stop matching what the player saw.

Seeds let you have both. This post tests three seeding choices on a repeated hit spark, on both PixiJS and Three.js, with NixieFX 0.1.20 (PixiJS 8.22, three.js r185).

## The setup

The effect is a 12-particle hit spark: one burst, particles living 0.2 to 0.35 s, color and size over life. Its export's support report lists it as supported on both the PixiJS and the Three.js backends, with nothing flagged.

For each test, the demo creates the effect, steps it nine times at 1/60 s (0.15 s after the hit), and reads every particle's position. On PixiJS that's `getParticleDebugQuads()`, converted back from screen pixels to effect units through the 2D projection (100 px per unit). On Three.js it's `getParticleDebugTransforms()`, which is already in world units.

## Test 1: no seed

```javascript
renderer.createEffect(definition, { position: [0, 0, 0] });
```

I expected this to be random. It isn't. Two instances created without a seed came out identical, and so did a third created after two other seeded effects, and an instance restarted with `reset()` and no seed. With no seed, every hit spark is the same burst.

That's a reasonable default for an effects runtime, since it keeps behavior repeatable, but it means you have to opt in to variation. A game that never passes a seed will show the same spark on every hit.

## Test 2: the same seed on every hit

Passing a fixed seed, for example `seed: 7`, gives the same result as no seed: five consecutive hits, each particle in exactly the same place (average distance between consecutive hits: 0). This is the right choice for one-off effects you want pinned down, such as a level-up flash in a trailer. It's the wrong choice for anything that repeats on screen.

## Test 3: a seed per hit

```javascript
// Same player + same hit number -> same seed, every time.
function hitSeed(playerId, hitIndex) {
  let h = 2166136261 >>> 0;
  for (const n of [playerId, hitIndex]) {
    h ^= n;
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h % 2147483647 || 1;
}

renderer.createEffect(definition, {
  position: hitPoint,
  seed: hitSeed(player.id, player.hitCount++),
});
```

The seed comes from things the game already tracks: which player, and which hit this is. Over five consecutive hits, the average particle moved 0.26 to 0.49 units from one hit to the next. At that moment no particle is more than 0.36 units from the hit point, so each hit has a clearly different shape.

![Five consecutive hits. Top row: the same seed on every hit, five identical bursts. Bottom row: a seed per hit, five different bursts.](/assets/seeds-for-repeated-hit-sparks/hits-strip.png)

It's still repeatable. Recomputing the five seeds later and replaying the hits reproduced every particle exactly (difference 0 on all five). So a replay system or a test only has to record the player id and the hit counter, not the random numbers.

## Same seed, PixiJS vs Three.js

Teams that ship one effect on both renderers usually want to know whether the two backends agree. For this effect, they do. With seeds 7, 8 and one per-hit seed, the largest position difference between the PixiJS and Three.js runs was about 3 × 10⁻¹⁷ units, which is floating-point rounding. Particle sizes matched exactly. On each backend, running the same seed twice gave a difference of exactly 0.

That's what backend compatible particle effects should mean in practice: the same export and the same seed give the same simulation, and only the drawing differs. The [NixieFX runtime docs](https://nixiefx.com/vfx-runtime-docs/) describe this as one deterministic core shared by both backends, and they show the `seed` option on `createEffect()`.

## Checklist

- [ ] Every effect that repeats on screen gets a seed per event, not a constant
- [ ] The seed is derived from game state (entity id + event counter), so replays and tests can rebuild it
- [ ] Effects that should look the same every time (UI confirmations, trailers) get a fixed seed on purpose
- [ ] A test steps the effect at a fixed timestep with a known seed and compares positions, on each backend you ship

## What this doesn't cover

- **Variable timesteps.** All of this used fixed 1/60 s steps. A live game loop with uneven frame times will not reproduce particle positions exactly, even with the same seed. Tests need their own fixed-step loop.
- **Unsupported settings.** This effect uses only bursts, color and size. In 0.1.20, the Three.js renderer reports lights and sub-emitters as blocked, so effects that use them can't be compared this way. I didn't test noise, collision, trails or textures here.
- **Drawing.** Matching simulated positions doesn't mean matching pixels. PixiJS and Three.js blend and rasterize differently, so a screenshot comparison across backends would still differ.
- **Scale.** One effect, 12 particles, one desktop Chromium browser.
