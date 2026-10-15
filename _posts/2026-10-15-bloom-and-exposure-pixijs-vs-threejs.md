---
layout: post
title: "Same NixieFX export, different glow: bloom and exposure in PixiJS and Three.js"
description: "Four HDR orbs rendered with PixiJS bloom and with Three.js preview bloom, measured pixel by pixel. What each backend does with intensity, exposure and bloom, and what that means when previews disagree."
date: 2026-10-15 12:20:00 +0400
published: true
task_id: N-563
---

A designer authors a hot orange spark with an intensity of 4 and checks it in the Three.js preview. It looks almost white and clearly hotter than the intensity-1 sparks next to it. The same export in the PixiJS HUD shows four identical orange dots. Nobody changed the effect. The two backends treat brightness above 1.0 differently, and the bloom and exposure settings don't mean the same thing in each.

I wanted numbers rather than impressions, so I rendered one export in both runtimes and read the pixels back.

## The test

One NixieFX effect with four emitters. Each emits a single additive orb with the same color, `[1, 0.45, 0.1]`, and a different HDR intensity: 1, 2, 4 and 8. The export reports `supported` for both `pixi2d` and `three3d`.

Both renderers draw into a 640×220 canvas at 60 px per world unit, so the orbs land on the same pixels. PixiJS uses a 2D projection, and Three.js uses an orthographic camera framed to match. For each orb I read the center pixel, and counted the pixels in a ring just outside the orb that are brighter than the background. Each setting gets five rows:

1. Bloom off, exposure 0.
2. Bloom off, exposure +1.
3. Bloom on, threshold 1. PixiJS uses intensity 1 and radius 8, low quality.
4. Bloom on, with a stronger PixiJS bloom: intensity 3, radius 24, high quality. Three.js preview bloom has no strength or radius setting, so its side is the same as row 3.
5. Bloom on, exposure +3 requested.

Versions: nixie-fx 0.1.20, pixi.js 8.22.0 and three r185, rendered in desktop Chrome.

![Five rows of four orange orbs. PixiJS on the left, Three.js on the right. Without bloom, PixiJS draws all four orbs the same orange while Three.js turns the brighter ones almost white. Only the PixiJS row with strong bloom shows a glow around the brightest orb.](/assets/bloom-exposure-previews/bloom-exposure-sheet.png)

## What the pixels say

**With bloom off, PixiJS ignores intensity and Three.js tone-maps it.** The PixiJS centers were `[255,149,70]`, `[255,140,68]`, `[255,148,70]` and `[255,151,70]` for intensity 1 to 8: the same orange. The runtime divides an over-bright color by its peak, which keeps the hue and drops the extra energy. Three.js runs the color through an ACES-style tone map instead, so the centers walk toward white: `[255,147,70]` at 1, `[255,239,202]` at 8.

**Exposure only reaches PixiJS when bloom is on.** With bloom off, setting exposure to +1 changed nothing in PixiJS. Every pixel matched the exposure-0 row. In Three.js `previewExposureStops: 1` applies whether or not bloom is enabled, and it behaves as you'd expect: the intensity-1 orb at +1 stop was `[238,185,101]`, the same value as the intensity-2 orb at 0.

**Three.js preview bloom adds no glow.** With `previewBloomEnabled: true` and threshold 1, the ring around every orb stayed at the background color: 0 lit pixels in every row. Reading the runtime explains it. In 0.1.20, the Three.js preview bloom re-encodes each particle's own color (a tone map plus a boost for the part above the threshold). There's no blur pass, so nothing spreads past the particle quad. If you want a halo in a Three.js game, it comes from your own postprocessing, such as an `UnrealBloomPass`, not from this setting.

**PixiJS bloom is a real blur, and its defaults are subtle.** At intensity 1 and radius 8, the ring around the intensity-8 orb gained only 19 lit pixels. At intensity 3, radius 24 and high quality, it gained 4,894, and the intensity-4 orb gained 1,457. The intensity-1 orb sits at the threshold and got no glow in either case. That part is correct: it isn't above 1.0, so nothing passes the bright filter. One thing to watch: at the strong setting, the glow around the two brightest orbs came out as a soft rectangle, not a round halo. You can see it in the fourth row. On a busy game background that may not show, but on a flat dark HUD panel it does.

**Both clamp exposure to ±2 stops.** Asking for +3 gave the same result as +2. The Three.js intensity-1 orb at "+3" was `[255,223,156]`, which is the intensity-4 orb at 0, so the request was clamped to two stops. The same clamp is in the PixiJS bloom config.

## Side by side

| Setting | PixiJS runtime | Three.js runtime |
|---|---|---|
| Intensity above 1, bloom off | Color normalized to its peak, so all orbs look the same | ACES-style tone map, so brighter orbs look whiter |
| Exposure, bloom off | Ignored | Applied (`previewExposureStops`) |
| Exposure range | −2 to +2 stops | −2 to +2 stops |
| Bloom | Screen-space blur via `PixiVfxRenderer({ bloom })`, with threshold, intensity, radius and quality | Per-particle color re-encode only, with no halo |
| Settings | `bloom: { enabled, threshold, intensity, radius, quality, exposure }` | `previewBloomEnabled`, `previewBloomThreshold`, `previewExposureStops` |

## A checklist before you say the previews disagree

```text
[ ] Same export, seed and frame in both previews
[ ] Bloom state written down for each backend (PixiJS: on/off, intensity, radius)
[ ] PixiJS exposure only counted when PixiJS bloom is on
[ ] Three.js preview bloom not expected to produce a halo
[ ] Any intensity above 1 checked with bloom on in PixiJS, or it will look flat
[ ] Exposure requests beyond ±2 stops treated as ±2
[ ] Final look checked in the game's own renderer and postprocessing
```

## Limits

- **These are preview and runtime settings, not your game's look.** The editor's preview bloom is never written into the export. The export keeps the authored HDR intensity, and the game's own bloom and tone mapping decide the final image.
- **One color, one texture, additive blending.** A saturated blue or an alpha-blended material may tone-map differently.
- **No color management beyond the defaults.** Three.js output used the sRGB color space, and PixiJS used its defaults. A different output color space will change the exact numbers.
- **The ring counts are a rough measure of glow,** not a perceptual one. A pixel counted as lit if its luminance was more than 3 above the background.
- **Not tested:** bloom cost per frame, pixel ratios other than 1, mobile GPUs, and Three.js with a real postprocessing bloom pass.

NixieFX is a particle editor for PixiJS and Three.js, and its preview switches between the two backends, which is how this question tends to come up. The [runtime docs](https://nixiefx.com/vfx-runtime-docs/) list preview bloom as preview-only and describe how HDR intensity is exported for the game's own bloom pipeline. That is the split these numbers show.
