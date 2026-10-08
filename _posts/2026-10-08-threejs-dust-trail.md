---
layout: post
title: "A Three.js dust trail that behaves on teleports and jumps"
description: "Building a world-space, distance-emitted dust trail in Three.js with NixieFX, and measuring three things that go wrong in games: teleports, jumps, and walk versus run."
date: 2026-10-08 11:00:00 +0400
---

A dust trail looks finished the first time a character runs across flat ground. The problems show up later, when the game does something the effect wasn't tested with: the player respawns, jumps, or starts sprinting.

This post builds a small dust trail in Three.js with the NixieFX runtime, then measures those three cases on a fixed clock. Everything below comes from a demo I ran: three r185, nixie-fx 0.1.18, seeded, stepped at 1/60 s.

*This post was drafted with AI assistance and reviewed by hand.*

![A capsule runner moving right across a dark floor, leaving a short line of soft brown dust puffs behind it](/assets/threejs-dust-trail/dust-trail-hero.png)

## The effect

One emitter, authored as JSON and exported with `npx nixie-fx export`:

```json
{
  "id": "dust",
  "loop": true,
  "maxParticles": 160,
  "render": { "blend": "alpha", "depthTest": true },
  "modules": { "color": true, "size": true, "velocity": true },
  "forces": { "drag": 2.5 },
  "spawn": {
    "rate": 0,
    "rateOverDistance": 10,
    "shape": "hemisphere",
    "radius": 0.12,
    "simulationSpace": "world"
  },
  "initializeParticle": {
    "lifetime": { "mode": "random", "min": 0.7, "max": 1.0 },
    "size": { "mode": "random", "min": 0.2, "max": 0.3 },
    "velocity": {
      "mode": "shapeDirection",
      "speed": { "mode": "random", "min": 0.4, "max": 0.8 }
    }
  }
}
```

Plus a brown colour that fades to zero alpha, and a size curve that grows each puff to 1.8 times its starting size.

The choices that make it a trail:

- **`rate: 0` with `rateOverDistance: 10`.** Dust comes from movement, about ten puffs per unit travelled. A character standing still makes none.
- **`simulationSpace: "world"`.** Puffs stay where they were kicked up instead of riding along with the character.
- **A hemisphere spawn.** Every puff moves up and outward, never into the floor. In my floor runs, the lowest particle centre was exactly the spawn height.

The export reports `supported` for Three.js with no warnings, and the whole trail drew in one instanced draw call.

## Moving it

The game owns the character, and the effect just gets told where the feet are, once per frame:

```js
function stepDust(dust, x, z, feetY) {
  const grounded = feetY <= 0.02;
  dust.setEmitterRuntimeParameters("dust", {
    emissionRateMultiplier: grounded ? 1 : 0,
  });
  dust.setTransform({ position: [x, feetY + FOOT_LIFT, z] });
  vfx.update(dt);
}
```

`FOOT_LIFT` is 0.1. With the emitter exactly at floor height (`0`), the lowest particle centres sat at 0.000, so with `depthTest` on, the bottom of each new puff is behind the floor. Lifting the emitter by 0.1 kept every centre at 0.1 or above.

The `emissionRateMultiplier` line is the jump fix, and it's below.

## Walk versus run

I moved the runner 6 units in a straight line at 1.5 units/s (walking) and at 4.5 units/s (running):

| | Walk | Run |
|---|---|---|
| Puffs emitted over 6 units | 59 | 59 |
| Puffs per unit | 9.8 | 9.8 |
| Puffs per second | 14.8 | 44.3 |
| Live at the end | 14 | 39 |

Distance emission does what it says: the trail has the same density per unit at any speed. Running gives a longer visible trail, because three times as many puffs are alive at once, but each stretch of ground gets the same amount of dust. If you want a sprint to look dustier, that's a game decision. Raise `emissionRateMultiplier` with speed, don't change the effect.

## Teleports

This is the case that's easy to miss when you only test running. A respawn or a portal moves the character 7 units in one frame. The emitter sees 7 units of distance and does exactly what it was told:

- 70 puffs emitted on that single frame (10 per unit × 7)
- All 70 within 0.4 units of the arrival point, not spread along the jump
- Live particles went from 26 to 95

So the player arrives in a cloud of dust they didn't walk through. The fix is to mute emission for the teleport frame only:

```js
function teleportDust(dust, x, z) {
  dust.setEmitterRuntimeParameters("dust", { emissionRateMultiplier: 0 });
  dust.setTransform({ position: [x, FOOT_LIFT, z] });
  vfx.update(dt);
  dust.setEmitterRuntimeParameters("dust", { emissionRateMultiplier: 1 });
}
```

With that, the teleport frame emitted 0 puffs. The runtime still records the new position during that update, so distance is measured from the arrival point afterwards: walking the next unit emitted 10 puffs, the normal rate.

![Two frames, one above the other: without the fix a dense dust clump sits at the arrival point; with emission muted there are only the few puffs from walking after arrival](/assets/threejs-dust-trail/dust-teleport-compare.png)

## Jumps

During a 0.6 s jump at running speed, the feet keep moving, so a distance emitter keeps emitting. Without the grounded check, 25 puffs spawned in mid-air, while the feet were up to 0.8 units off the floor. With `emissionRateMultiplier: 0` while airborne, that went to 0, and landing picked the trail back up.

A landing puff would be a separate one-shot effect. Keeping it separate means "the character landed" stays a game event, not something the trail has to guess from height changes.

## Checklist

- Emit by distance (`rate: 0`, `rateOverDistance` > 0), in world space.
- Spawn slightly above the floor if the particles depth-test against it.
- Mute emission for one update on any teleport, respawn or camera cut that moves the character.
- Mute emission while airborne. Let the game decide what "grounded" means.
- Watch `vfx.stats.drawCalls`. This trail stayed at 1.

## Limits and unsupported settings

- **Three.js only.** The export also says the effect is supported for PixiJS, with a note that `depthTest` becomes 2.5D draw order there, not a depth buffer. I didn't run it in Pixi.
- **Flat ground only.** The emitter follows the feet, but the puffs know nothing about slopes or stairs. On uneven ground, the game needs to pass the real contact point.
- **No collision.** Puffs don't hit walls. The collision module exports as `partial` in 0.1.18, and I didn't use it.
- **Not tested:** frame rates other than 60, many runners at once, mobile GPUs.

If you'd rather tune the puffs visually than edit JSON, a three js particle editor helps. The [NixieFX Three.js runtime guide](https://nixiefx.com/threejs-runtime/) covers how an exported effect loads into a scene, and the stats used above.
