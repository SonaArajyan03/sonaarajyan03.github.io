---
layout: post
title: "A PixiJS objective pulse at two map zoom levels"
description: "An unscaled overlay anchors a small NixieFX loop to a map objective, with explicit removal when the objective stops needing motion."
date: 2026-10-12 00:00:00 +0400
published: true
task_id: N-363
source_sheet_tab: Sona NixieFX
source_sheet_row: 40
---

Disclosure: This tutorial and its source were generated with AI for NixieFX marketing. The screenshots and measurements come from the supplied local PixiJS fixture, not a production game or a phone benchmark.

A map can zoom while its objective marker keeps a consistent screen size. The position belongs to the map; the visual cue belongs to the interface. Putting both beneath the scaled map container makes the pulse grow whenever the player zooms in.

This example separates those responsibilities. It uses PixiJS 8.22.0 and nixie-fx 0.1.20, one objective at world point `(600, 300)`, and a small continuous glow. The controller removes the effect when the objective is complete, untracked, off-screen, hidden with the map, or disabled by the local VFX preference.

## Put the pin beside the zooming world

The map viewport contains two siblings: the map world and an overlay. The world receives the camera's scale and pan. The overlay keeps a scale of one. Both sit within the same rectangular Pixi mask.

The pin belongs to the overlay. Its children are the effect layer, an opaque marker, and the objective label. The marker and label remain visible when motion is disabled or the objective completes.

After changing the camera, convert the objective's world point into the viewport's local coordinates:

```javascript
world.scale.set(zoom);
world.position.set(panX, 0);

const global = world.toGlobal(worldPoint);
viewport.toLocal(global, undefined, pin.position);
```

The conversion accounts for the viewport offset and the map transform. Do not apply the map scale to the pin again. The supplied fixture recalculates this position when its camera controls change; a moving game camera would perform the conversion as part of its own update.

The effect renderer parents to the pin's pulse container with a fixed projection of 40 pixels per unit. Changing map zoom therefore moves the whole pin without scaling its effect layer.

## Author one bounded loop

The exported effect contains one looping, unlit circle-billboard emitter. It emits two particles per second, gives each a 1.2-second lifetime, and reserves four particle slots. Its warm glow expands and fades. It has no file textures, custom materials, lights, trails, or sub-emitters.

The source was generated from the official Pixi preset and configured before export. Validation reported zero errors and zero warnings. The compiled bundle loaded with the Pixi backend required, and the runtime reported no missing resources or unsupported features.

If you tune the appearance in a pixi js particle editor, re-export after changing the authoring source. The [NixieFX PixiJS particle-effects guide](https://nixiefx.com/pixijs-particle-effects/) covers the bundle loader and renderer integration. This example adds the map-coordinate and objective-state boundary around that integration.

## Let objective state own the instance

The controller keeps a single instance while the objective qualifies for animation:

```javascript
function shouldRun() {
  return mapOpen && tracked && !completed && enabled && onScreen();
}

if (shouldRun()) {
  if (!fx) fx = renderer.createEffect(definition, { seed: 363 });
} else if (fx) {
  renderer.removeEffect(fx, true);
  fx = null;
}
```

The normal ticker advances the renderer once per frame, converting Pixi's milliseconds to seconds. It does not reset the effect on every frame or separately update the instance. Camera changes reuse the existing instance while it remains eligible.

Removing the effect has different consequences from stopping emission. Here, every exit destroys the instance and releases its particle capacity. Returning an incomplete, tracked objective to view can create one new instance. Reopening a completed objective cannot recreate its pulse. Only the fixture's explicit “New objective” control clears completion.

When no effect qualifies, the owning ticker stops. Browser visibility changes pause ordinary playback, and page teardown destroys the renderer and Pixi application. The static marker still communicates objective state inside the map.

## Inspect both zoom levels at the same time

![Actual PixiJS fixture at map zoom 0.55, with a fixed two-second objective pulse.]({{ '/assets/map-pin-zoom/zoom-0.55-at-2s.png' | relative_url }})

![The same fixed-time pulse at map zoom 0.85; the map changes scale and the pin moves within the unscaled overlay.]({{ '/assets/map-pin-zoom/zoom-0.85-at-2s.png' | relative_url }})

These are actual browser captures after 120 fixed `1/60`-second updates with seed 363. At zoom 0.55, the pin's viewport-local position was `(330, 165)`. At zoom 0.85, it was `(510, 255)`. Its scale remained `(1, 1)` in both views.

The lifecycle check also ran the loop for 600 fixed updates, equivalent to ten simulated seconds. Peak usage was three particles against the capacity of four, with one effect instance. Each of the five exit conditions produced zero instances, zero active particles, and zero reserved capacity. Another 60 attempted updates after each exit produced zero VFX simulation calls.

Two additional checks passed: reopening a completed objective left the effect absent, and five repeated active reconciliations kept one instance. These checks exercise the actual exported effect in PixiJS.

## Keep the performance claim narrow

The four-slot cap bounds particle storage for this one cue. It leaves GPU time, draw-call cost, frame rate, and phone performance unmeasured. The fixed-step check measures lifecycle counters and simulation behavior; it does not render a benchmark frame for every update. The production build also reports a bundle-size warning and has not been optimized for download size.

No unsupported settings are enabled in this effect. Lit shading requires the Three backend; Pixi depth-write behavior uses draw ordering rather than GPU depth-buffer writing, and this source disables it. No Three.js parity is claimed.

The visibility check uses the pin center, so the mask can clip a glow near the edge. The local VFX switch does not implement operating-system reduced-motion preferences. Editor visual review, small-screen readability, and a full accessibility audit remain pending.

## Run the supplied fixture

Use the [browser fixture]({{ '/demos/map-pin-zoom/' | relative_url }}) to inspect the controls. To edit it, download the [source kit]({{ '/assets/map-pin-zoom/source.zip' | relative_url }}), enter its demo folder, and run:

```sh
npm ci
npm run vfx:validate
npm run vfx:export
npm run dev
```

Open `http://127.0.0.1:5201/`. Inspect the two zoom levels, run the lifecycle check, complete the objective, and reopen the map. Check that the completed marker stays static. Use the exported bundle in the game and retain the authoring JSON for future edits.
