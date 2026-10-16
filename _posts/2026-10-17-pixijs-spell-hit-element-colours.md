---
layout: post
title: "One PixiJS spell hit, three elements: recolour the gradient, not start and end"
description: "A short magic spell hit for PixiJS 8 built with NixieFX, then recoloured for fire and ice at load time. Which colour fields the Pixi runtime actually reads, and how long the hit lasts."
date: 2026-10-17 01:41:00 +0400
published: true
task_id: N-221
---
![Four frames of the same spell hit on a grey target, 0.1 seconds after impact. Arcane violet as exported, fire orange with the gradient edited, still violet when only start and end were edited, and ice blue with the gradient edited.](/assets/pixijs-spell-hit-element-colours/spell-hit-elements.png)

A spell hit is a small effect that gets reused a lot. Once the arcane version looks right, the next request is usually "same thing, but fire" and then "and ice". You can author three effects, or you can author one and recolour it when the game loads. This post builds a short spell hit for PixiJS 8, then tries the second approach and checks what actually changes on screen.

Versions: PixiJS 8.22.0 and nixie-fx 0.1.21, run in headless Chrome 155 with a fixed 1/60 s step and a fixed seed.

## The hit

Three emitters, all additive, all one-shot, gravity set to 0:

- **flash**: one particle at the impact point. It lives 0.12 s and grows from 0.6x to 1.3x while it fades from white to the element colour.
- **ring**: one particle that starts 0.02 s later and expands from 0.3x to 1.0x over 0.28 s. It goes from the light element colour to the dark one.
- **sparks**: 14 small particles thrown outward at 2.5 to 4 units/s with drag 2.5, so they slow down quickly. They live 0.25 to 0.45 s.

That's 16 particles at the peak, and the instance stops being active on frame 28, about 0.47 s after the hit. The short life is deliberate. The hit should confirm the impact and be gone before the next one lands.

I wrote it as NixieFX authoring JSON. A pixi js particle editor like NixieFX gives you the same file with a live preview, which is easier than tuning drag and spark speed by number. `npx nixie-fx validate .` reported 0 errors and 0 warnings, and the export's support report lists the effect as `supported` on both the Pixi and Three backends, with no partial or unsupported modules.

Loading and playing it follows the usual pattern:

```js
const bundle = loadVfxExportBundle(
  { manifest, effectsByPath: { "effects/spell-hit.json": hitJson } },
  { requiredBackend: "pixi2d", requiredEffectIds: ["spell-hit"] },
);
const spellHit = bundle.effectsById.get("spell-hit");

function onSpellImpact(x, y, effect = spellHit) {
  vfx.createEffect(effect, { position: toEffectSpace(x, y) });
}
```

`toEffectSpace` is whatever converts your hit point into the renderer's projection. Trigger it from the resolved hit, not from the cast, so a miss doesn't play an impact.

## The exported file stores colour twice

When I opened the exported `spell-hit.json`, each emitter's `color` block had two descriptions of the same colours:

```json
"color": {
  "start": [0.85, 0.55, 1, 0.7],
  "end": [0.45, 0.2, 0.9, 0],
  "gradient": {
    "mode": "blend",
    "colorStops": [
      { "position": 0, "color": [0.85, 0.55, 1] },
      { "position": 1, "color": [0.45, 0.2, 0.9] }
    ],
    "alphaStops": [ ... ]
  }
}
```

`start` and `end` look like the obvious thing to edit. I tried three versions of a fire variant, each a `structuredClone` of the loaded effect:

1. only `gradient.colorStops` changed
2. only `start` and `end` changed
3. both changed

Then I rendered each one 0.1 s after the hit and averaged the colour of the bright pixels:

| Variant | Mean bright pixel (RGB) |
|---|---|
| arcane, as exported | 186, 168, 213 |
| fire, gradient edited | 202, 170, 153 |
| fire, only start/end edited | **186, 168, 213** |
| fire, both edited | 202, 170, 153 |
| ice, both edited | 159, 200, 214 |

Editing only `start` and `end` changed nothing on screen. The result was identical to the untouched arcane effect. For an emitter that uses a blend gradient, the Pixi runtime draws from `gradient.colorStops`. Editing the gradient alone gave exactly the same result as editing both fields.

I also recoloured the authoring source file instead of the export and passed it straight to `createEffect`. It rendered the same as the edited export: 202, 170, 153.

## A recolour helper

This is the version I'd keep. It changes only the gradient stops, keeps every alpha stop and timing value, and leaves the white core of the flash and sparks white:

```js
const ELEMENTS = {
  fire: { light: [1, 0.55, 0.15], dark: [0.9, 0.2, 0.05] },
  ice:  { light: [0.55, 0.9, 1],  dark: [0.2, 0.5, 1] },
};

function recolour(effect, { light, dark }) {
  const copy = structuredClone(effect);
  for (const emitter of copy.emitters) {
    const stops = emitter.color.gradient.colorStops;
    const whiteCore = stops[0].color.every((v) => v === 1);
    if (!whiteCore) stops[0].color = [...light];
    stops[stops.length - 1].color = whiteCore ? [...light] : [...dark];
  }
  return copy;
}

const hits = {
  arcane: spellHit,
  fire: recolour(spellHit, ELEMENTS.fire),
  ice: recolour(spellHit, ELEMENTS.ice),
};
// onSpellImpact(x, y, hits[spell.element]);
```

Build the variants once at load time. All three ran with the same 16-particle peak and ended on the same frame, because only colours changed.

## Checklist before you ship element variants

- Recolour `gradient.colorStops`. Don't rely on `start`/`end` for a gradient emitter.
- Keep alpha stops, sizes, lifetimes and spawn settings shared, so all elements hit with the same timing.
- Look at each variant on your real background. Additive blending means a bright ice blue reads much lighter than a dark fire red on the same scene.
- If a variant needs more than colour (fire rising, ice shattering), author it as its own effect and export it, so it gets its own validation and support report.

## Limits

- **This covers colour only.** I didn't test runtime edits to sizes, spawn shapes or textures.
- **The edited copies bypass the export step.** The support report in the manifest describes the effect as exported. Changing colours doesn't affect support, but if you change anything else at runtime, run `nixie-fx validate` on an equivalent source file.
- **Measured once, in software.** SwiftShader WebGL, one seed, one frame. The colour difference is large enough not to depend on that, but I didn't test a GPU or measure frame time.
- **The Three.js side is untested.** The export says the effect is supported on Three, but I only rendered it with the Pixi renderer.

For setting up the renderer, the export bundle and the texture provider, see [the NixieFX guide to PixiJS particle effects](https://nixiefx.com/pixijs-particle-effects/).
