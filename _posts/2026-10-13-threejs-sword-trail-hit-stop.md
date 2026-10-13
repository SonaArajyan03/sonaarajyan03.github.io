---
layout: post
title: "A Three.js sword-slash trail through a hit-stop: pause the effect with the game"
description: "A 0.1 s freeze on impact, a shaking camera, and a particle trail that either waits or keeps aging. Measured with NixieFX 0.1.20 and three.js r185."
date: 2026-10-13 11:00:00 +0400
---

Hit-stop is the short freeze when a hit lands: the game stops for a few frames, the camera shakes, then the swing continues. It's one of the cheapest ways to make a hit feel heavy. It also raises a question that's easy to miss: should the sword trail freeze too?

I built a small case to find out, with one swing, one impact and three ways to treat the trail during the freeze. The difference shows up clearly at the end of the swing, not during the freeze, which is why it's easy to miss when you check by eye.

## The setup

- **Swing:** the blade tip sweeps 150° to 30° on a 1.2-unit radius in 0.25 s of game time, with each 1/60 s frame split into 4 sub-steps.
- **Impact:** halfway through the swing. Game time stops for 0.1 s (6 frames) while the camera shakes by up to 0.06 units on a fixed seed.
- **Trail:** a billboard particle trail in world space, emitted by distance (60 particles per unit), with a 0.2 to 0.3 s lifetime and size and alpha shrinking over life. It's an effect exported from a visual particle editor for three.js, NixieFX, and played with its Three.js runtime (nixie-fx 0.1.20, three.js r185).
- **End:** `allowCompletion()` when the swing finishes.

During the freeze the sword doesn't move, so distance-based emission adds nothing. The only question is whether existing particles keep aging. I tried three options:

1. **Pause:** don't call `update()` on the effects renderer while the game is frozen.
2. **Keep:** keep calling `update()` with real frame time, which is what happens if the VFX loop runs on wall-clock time instead of game time.
3. **Slow:** call `update()` at 10% speed, a common compromise.

```javascript
if (frozenLeft > 0) {
  frozenLeft--;
  if (mode === "keep") vfx.update(DT);
  else if (mode === "slow") vfx.update(DT * 0.1);
  // "pause": no update at all
  placeCamera(HIT_SHAKE);
} else {
  // normal swing step: move the tip, setTransform, update
}
```

## What happened

![Four frames. Top: the end of the hit-stop, with the paused trail full and bright and the kept-updating trail visibly thinner. Bottom: the end of the swing, with the paused trail covering the whole arc and the kept-updating trail missing its start.](/assets/threejs-sword-trail-hit-stop/hitstop-trail.png)

At the end of the 0.1 s freeze:

- **Pause:** 77 particles, mean size 0.084, unchanged from the moment of impact.
- **Keep:** 74 particles, mean size 0.053. Only 3 particles died, but the rest shrank by 37% while the sword stood still.
- **Slow:** 77 particles, mean size 0.080, 4% smaller.

At the end of the swing:

- **Pause:** 141 particles covering 114° of the arc.
- **Keep:** 91 particles covering 90°. The first part of the slash, from before the impact, has already died.
- **Slow:** 136 particles covering 114°.

In all three, the trail empties 0.30 s after `allowCompletion()`, which matches the 0.3 s maximum lifetime. So "keep" doesn't make the trail end early; it makes the swing look shorter than it was. The arc from before the hit spends its lifetime during a freeze when nothing on screen is moving.

The camera shake didn't affect the trail in any mode. The particles are in world space and the shake only moves the camera, so they stay where the blade put them. At the end of the freeze and at the end of the swing, the nearest particle was 0.000 units from the blade tip in every mode.

## What I'd do

Pause the trail with the game. A hit-stop freezes game time, and the trail is part of the game, so it should use the same clock. In practice that means the code that skips gameplay updates during a hit-stop should also skip the effects renderer's `update()`, or pass it the scaled game delta rather than wall-clock delta.

The 10% "slow" option is close enough here, because 0.1 s at 10% is only 0.01 s of aging. A longer hit-stop, or a slow-motion finisher at 20 to 30% speed, would age the trail noticeably and is worth measuring the same way.

Some effects should keep running during a hit-stop: an impact flash or sparks that are supposed to read as instant. Those can live on a separate renderer, or a separate effect instance updated on wall-clock time, while the sword trail follows game time.

## Checking it yourself

The demo prints live particle count, mean particle size, arc covered and the nearest particle's distance from the blade tip on every frame. They come from `getParticleDebugTransforms()`:

```javascript
const raw = trail.getParticleDebugTransforms();
const meanSize = raw.reduce((a, p) => a + p.width, 0) / raw.length;
const nearest = Math.min(...raw.map((p) =>
  new THREE.Vector3(...p.position).distanceTo(tipWorld)));
```

Mean size is the most useful of the three during a freeze. The particle count barely moves, so a count-only check would say nothing changed. Size and alpha shrink together over a particle's life, so a smaller mean size means a dimmer, thinner trail.

The [NixieFX Three.js runtime guide](https://nixiefx.com/threejs-runtime/) covers `update()`, `setTransform()`, `allowCompletion()` and the support report.

## Supported settings and limits

- The renderer's `getSupport()` reports this effect as supported on Three.js. In 0.1.20 it reports `lights` and `subEmitters` as blocked on Three.js, so an impact that spawns sparks from the trail's particles or lights the blade would need a different approach. This trail uses spawn, color and size only, and I didn't use the ribbon `trails` module.
- Fixed 1/60 s steps, one seed, one desktop Chromium browser. The numbers are for this effect and lifetime. A trail with a longer lifetime loses less, proportionally, to the same freeze.
- The "case" is a single demo scene with a box and a blade, not a production character or a playtest. Whether a 0.1 s hit-stop feels right is a design call this doesn't measure.
