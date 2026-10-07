---
layout: post
title: "A Three.js magic projectile in two effects: head, trail, impact, and the one call that keeps the trail alive"
description: "Build a Three.js magic projectile with NixieFX: a moving looping effect with a world-space sparkle trail, a one-shot impact, measured draw calls, and what happens to the trail when it hits."
date: 2026-10-07 15:00:00 +0400
---

A magic projectile is three things in a row: something glowing that travels, a trail it leaves behind, and a burst where it lands. This post builds one for a Three.js scene with two exported NixieFX effects and about forty lines of glue code, then checks the parts that are easy to get wrong.

Versions: three r185 and nixie-fx 0.1.17, run in Chromium. The numbers below come from the demo stepped on a fixed 1/60 s clock.

*Note: I'm involved with the NixieFX project. The runs were done in a Claude Code session, and this post was drafted with AI and reviewed by hand.*

![The projectile mid-flight: a violet glowing head with a sparkle trail stretching back toward the caster](/assets/magic-projectile/n267-flight.png)

![The moment of impact at the target's front face: a bright flash, a spark burst, and the trail still fading behind it](/assets/magic-projectile/n267-impact.png)

## Two effects, three emitters

**`magic-projectile`** (looping, moved every frame):

- `head`: a few additive billboards, local space, so the glow sticks to the projectile.
- `trail`: emission by distance (`rateOverDistance: 40`, about 40 sparks per unit travelled), **world** space so sparks stay where they were born, short life (0.3 to 0.5 s), a little drag and a slight upward drift.

**`magic-impact`** (one shot): a 0.18 s flash and 40 sparks thrown outwards from a small sphere.

The trail emitter is the important one:

```json
{
  "id": "trail",
  "loop": true,
  "modules": { "color": true, "size": true, "velocity": true },
  "forces": { "gravity": -0.6, "drag": 2.5 },
  "spawn": {
    "rate": 0,
    "rateOverDistance": 40,
    "shape": "sphere",
    "radius": 0.06,
    "simulationSpace": "world"
  },
  "initializeParticle": {
    "lifetime": { "mode": "random", "min": 0.3, "max": 0.5 },
    "size": { "mode": "random", "min": 0.1, "max": 0.17 }
  }
}
```

`rate: 0` plus `rateOverDistance` means a projectile that isn't moving doesn't leave sparks. `simulationSpace: "world"` is what turns sparks into a trail; in local space they'd travel along with the head.

Both files pass `npx nixie-fx validate .` and the export reports them as **supported** on the Three.js backend.

## Moving it

Load the bundle once, create a `ThreeVfxRenderer` with your scene and camera, then move the projectile along its path every frame:

```javascript
const FLIGHT = 0.8; // seconds from caster to target
function pathAt(t) {
  const u = Math.min(t / FLIGHT, 1);
  return [-3 + 5.7 * u, 0.8 + 0.6 * Math.sin(Math.PI * u), 0];
}

const projectile = vfx.createEffect(projectileFx, { position: pathAt(0), seed: 11 });
let t = 0, impact = null;

renderer.setAnimationLoop(() => {
  const dt = clock.getDelta();
  if (t < FLIGHT) {
    projectile.setTransform({ position: pathAt(t + dt) });
  } else if (!impact) {
    projectile.allowCompletion();
    impact = vfx.createEffect(impactFx, { position: pathAt(FLIGHT), seed: 12 });
  }
  vfx.update(dt);
  t += dt;
  renderer.render(scene, camera);
});
```

`setTransform` feeds the new position into the simulation: new particles are emitted at the new origin, while world-space particles already in the air stay put. That's exactly the trail behaviour we want.

## The call that keeps the trail alive

My first version ended the projectile with `stop()`. I logged the number of trail particles each frame: 124 just before impact, **0 on the next frame**. The whole trail vanished the instant the projectile hit, which looks like a rendering bug.

`allowCompletion()` stops emitting but lets existing particles finish their lifetime. Same log with that call:

```text
time (s)  trail particles
0.80      117
0.85      104
0.95       80
1.10       38
1.30        0   (instance reports isActive = false)
```

The trail fades out behind the impact over half a second, and once `isActive` turns false you can `removeEffect` the instance.

## Two things I measured instead of assuming

**Does a fast projectile clump its trail?** Distance-based emission on a moving emitter can bunch particles at each frame's end position. To check, I made the sparks stand still (no velocity, no spawn radius) and measured the spacing between neighbours after half a second of flight, at about 7 units per second. Moving once per frame, the median spacing was 0.062 units, and 4 of 113 neighbour pairs sat on top of each other. Splitting each frame into 4 sub-steps gave 0.053 and no overlaps. Either is fine visually, so in this demo I didn't sub-step. A much faster projectile is worth re-checking.

**What does the trail cost?** With the effect as above, the whole scene peaked at 4 VFX draw calls with the impact playing, every emitter on the renderer's instanced path. I then switched on the emitter's built-in `trails` module, which draws a short history trail behind each particle. The export still said "supported" with no warnings, but the projectile alone went to **122 draw calls**, 121 of them one mesh per particle. That matches the runtime's documented rule: emitters with trails or flipbook animation fall back from instanced rendering to per-particle meshes. For a projectile with a hundred sparks, a particle trail is the cheaper choice.

## Checklist

- Trail emitter in world space, head in local space.
- Emit by distance, not by time, so a paused projectile leaves nothing behind.
- End the projectile with `allowCompletion()`, not `stop()`.
- Spawn the impact at the hit point on the target's surface. With `depthTest` on, an impact placed inside the mesh is hidden.
- Watch `vfx.stats.legacyParticleDrawCalls`; it should stay at 0 unless you mean it not to.

## What isn't supported or wasn't tested

- **Lit shading:** the effects are unlit. Lit particles need real lighting materials and also leave the instanced path.
- **Mesh particles:** none here. On Three.js, true 3D mesh particles need a mesh asset; the built-in shard templates are not real 3D meshes there.
- **Bloom:** the runtime's bloom is a preview-grade option. I didn't use it; a game with its own post-processing should leave it off.
- **On PixiJS:** the same files export as supported for PixiJS too, but the export notes that `depthTest` becomes 2.5D draw ordering, not a depth buffer. I only ran this in Three.js.
- **Not tested:** other browsers, mobile, very fast projectiles, many projectiles at once.

If you want to tune the look rather than edit JSON, a three js particle editor helps a lot: the [NixieFX Three.js runtime guide](https://nixiefx.com/threejs-runtime/) covers how editor exports load into a scene, including the instancing rules above.
