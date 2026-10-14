---
layout: post
title: "Footstep dust for a crowd of runners in Three.js: per-step instances, a pool, or one shared emitter"
description: "Three ways to repeat a footstep dust puff in Three.js with NixieFX 0.1.20, measured with 1, 8 and 24 running characters: draw calls, dropped puffs, CPU per frame, and the pool sizing rule."
date: 2026-10-14 10:00:00 +0400
---

A footstep puff is a tiny effect: ten particles, under a second of life, spawned every time a foot lands. The interesting part is what happens when it repeats three times a second for every character on screen.

This post compares three ways to repeat one puff in Three.js, using NixieFX 0.1.20 and three r185, with 1, 8 and 24 characters running in circles for 10 seconds at fixed 1/60 s steps.

![Eight capsule characters running in circles on a dark floor, each leaving small pale dust puffs where its feet landed](/assets/threejs-footstep-dust/runners.png)

## The puff and the run

The puff is one emitter: a burst of 10 particles in world space, so they stay where the foot landed. Particles live 0.45 to 0.7 s, drift outwards slowly, sink a little and fade. Each character runs at 4 units/s and lands a foot every 20 frames (3 steps per second), alternating left and right, 0.12 units either side of its path.

That gives a spawn rate of 30 particles per second per character. Since a puff lives up to 0.7 s and a new one starts every 0.33 s, up to three puffs from the same character are alive at once. That number turns out to matter.

## Three ways to repeat it

**1. An instance per step.** Call `createEffect` on every footfall with a new seed, and `removeEffect` once the instance reports `isActive === false`.

**2. A pool.** Create a fixed number of instances up front with `autoStart: false`. On a footfall, take one that isn't active, move it with `setTransform`, and call `restart()`. If none is free, that step gets no dust.

**3. One shared instance.** Create a single looping instance with no authored bursts, and on every footfall call:

```javascript
const emitted = dust.emitBurst("dust", { count: 10, position: footWorldPosition });
if (emitted < 10) droppedParticles += 10 - emitted; // capacity-clamped
```

`emitBurst` spawns the particles at the given world position for that burst only.

## The numbers

Measured over 10 s of running. Draw calls are the VFX renderer's own count at the busiest frame. CPU is the median of three runs of the 24-character case, timing the footstep logic plus `vfx.update()`, in Chromium on an Intel i9-9880H.

| 24 runners, 720 steps | Peak instances | Peak VFX draw calls | Dropped particles | CPU per frame |
|---|---|---|---|---|
| Instance per step | 52 | 52 | 0 | 4.31 ms |
| Pool, 2 per runner (48) | 48 | 48 | 510 | not timed |
| Pool, 3 per runner (72) | 72 | 52 | 0 | 3.53 ms |
| Shared, `maxParticles` 256 | 1 | 1 | 2,792 of 7,200 | 1.25 ms |
| Shared, `maxParticles` 512 | 1 | 1 | 0 | 2.06 ms |

With 8 runners the picture is the same at a smaller scale: 18 draw calls at the peak for per-step instances and for a 3-per-runner pool, 1 for the shared instance, and no drops with a 256 cap (peak 150 live particles). With a single runner it barely matters: 3 draw calls against 1.

Every active instance is its own draw call here (idle pool slots draw nothing). Per-step instances and pools scale with how many puffs are alive at once, and the shared instance doesn't.

## Worked example: sizing both budgets

**The pool.** A pool slot is busy for the puff's full lifetime, so a character needs `ceil(max lifetime × steps per second)` slots: `ceil(0.7 × 3) = 3`. With 2 slots per runner, a single runner already lost 10 of its 30 puffs, and 24 runners lost 51 of 720. So roughly every third step has no dust. Sprinting raises the step rate, so size the pool for the fastest gait, not the default one.

**The shared instance.** Its `maxParticles` is now the budget for every character at once. The upper bound is `runners × steps per second × max lifetime × particles per puff = 24 × 3 × 0.7 × 10 = 504`. With the default 256, the shared instance silently capped at 256 live particles and dropped 39% of the dust. It doesn't warn: the only signal is the return value of `emitBurst`, which is why the snippet above counts it. At 512 nothing was dropped and the peak was 427.

The 512 version costs more CPU than the 256 one (2.06 against 1.25 ms) simply because it's simulating the particles the 256 version was throwing away. It's still about half of the per-step approach.

## A pool repeats the same puff

There's one more difference you can see without counting anything. `restart()` replays the instance with the seed it was created with. I recorded each particle's offset from the foot six frames after the puff started, for one pool slot used at two different footfalls: the largest difference was 0. Every puff from that slot is the same shape, so with three slots per runner, each character's dust cycles through three stamps.

Per-step instances with a new seed each time differed by up to 0.12 units over the same check, and two bursts from the shared instance differed by up to 0.10. If you pool, giving each slot a different creation seed at least spreads the repeats across slots, but it doesn't remove them.

## Checklist

- [ ] Count puffs alive per character: `ceil(max lifetime × steps per second)`, at the fastest gait.
- [ ] If you pool, size it from that number and count the steps that found no free slot.
- [ ] If you share one instance, set `maxParticles` from `runners × steps/s × lifetime × particles per puff` and check what `emitBurst` returns.
- [ ] Watch `vfx.stats.drawCalls` and `vfx.stats.effectCount` with the real crowd size, not one test character.
- [ ] Look at several consecutive footsteps from the same character. Identical puffs are easier to spot than you'd think.

## Limits and what I didn't test

- **One instance means one set of controls.** Runtime parameters such as a color tint apply to the whole emitter, so per-character variants (a muddy character, a snowy one) need separate shared instances, one per variant.
- **Culling and sorting.** I didn't test whether a single instance spread across the whole map is culled as one object, or how its particles sort against other transparent effects.
- **Unsupported settings.** The puff uses only bursts, velocity, color and size, and exports as supported on both backends. In 0.1.20 the Three.js renderer blocks lights and sub-emitters, so a puff that lit the ground or spawned debris on landing wouldn't work this way. The PixiJS export reports `depthTest` as 2.5D draw order rather than a depth buffer, and I only ran Three.js.
- **Scale.** One desktop browser, one machine, a 10-second run. Timings are rough. The draw-call and drop counts are the solid part.

Whichever way you repeat it, the puff itself is the same exported file, whether you tune it in a web game VFX editor or as JSON. The [NixieFX Three.js runtime guide](https://nixiefx.com/threejs-runtime/) documents `emitBurst`, the instance controls and the stats used here.
