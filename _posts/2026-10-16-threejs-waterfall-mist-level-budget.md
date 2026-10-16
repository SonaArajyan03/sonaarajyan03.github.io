---
layout: post
title: "Waterfall mist across a whole Three.js level: a particle budget, and what switching it off by distance saves"
description: "Six waterfalls, one NixieFX mist effect, five ways to gate it by distance. Drawn and simulated particles, update time, and how full the mist is when the player arrives."
date: 2026-10-16 16:20:00 +0400
published: true
task_id: N-426
---
![Two horizontal bar charts. Left, mean mist particles drawn over an 80 m walk past six waterfalls: always on 360; setVisible(false) past 20 m 162; pause() plus hide past 20 m 163; allowCompletion() / play() 176; emission rate by distance 155. Right, vfx.update() time in ms per frame: always on 2.06; setVisible 0.89; pause plus hide 0.90; allowCompletion 0.98; emission rate 0.85.](/assets/threejs-waterfall-mist-budget/mist-budget-chart.png)

Waterfall mist is easy to budget for one waterfall: rate times lifetime. It's harder to budget for a level, because a level has six waterfalls and the player only stands next to one at a time. This post measures that case in Three.js with NixieFX: what the mist costs when every waterfall runs all the time, and what four ways of switching it off by distance actually save.

Measured with three.js r185 and nixie-fx 0.1.21 in headless Chrome 155 with software WebGL, on fixed 1/60 s steps.

## The mist

One effect, placed at the foot of each waterfall. It's a NixieFX effect file, built from the package's default effect and exported with the CLI. If you'd rather shape it by eye, NixieFX is a visual particle editor for three.js and saves the same JSON. The settings that set the budget:

```text
spawn        box 1.6 x 0.1 x 0.5 (the pool), 30 particles/s, looping
lifetime     1.6 to 2.4 s
size         0.35 to 0.7 units, soft, alpha peaks at 0.28
motion       0.25 to 0.6 units/s upward, light sideways drift, drag 0.8
render       alpha blend, depth test on, depth write off
```

The export reports it as `supported` on the Three backend with no warnings.

Thirty particles per second for about two seconds is roughly 60 live particles per waterfall. With six waterfalls that's 360, and that's what I measured: 360 on average with everything running.

## The level and the walk

Six waterfalls stand along an 80 m path, alternating sides, 12 m apart. The camera walks the path at 4 m/s at eye height. Before the walk starts, every waterfall has run for 3 s so it's at its steady state. Each strategy below gets exactly the same walk. I recorded, every frame:

- particles drawn (the instance's `visibleParticles`, counted only for visible instances)
- particles simulated (`activeParticles`)
- time spent in `vfx.update()`
- particles at each waterfall at the moment the player first comes within 10 m of it

## Five strategies, measured

The distance rule is the same everywhere: 20 m from the player.

```js
const d = camera.position.distanceTo(fallPosition);

// 1. always on: do nothing
// 2. hide:   fx.setVisible(d <= 20)
// 3. hide and freeze:
fx.setVisible(d <= 20);
if (d <= 20 && fx.paused) fx.play(); else if (d > 20 && !fx.paused) fx.pause();
// 4. finish and restart: fx.allowCompletion() past 20 m, fx.play() inside 20 m
// 5. thin out: fx.setEmitterRuntimeParameters("mist", {
//      emissionRateMultiplier: clamp((25 - d) / 15, 0, 1) })   // 1 at 10 m, 0 at 25 m
```

```text
strategy                   drawn   simulated   update ms/frame   particles on arrival
always on                   360       360        2.01 / 2.10          59-63
setVisible past 20 m        162       363        0.86 / 0.91          59-63
pause() + hide past 20 m    163       364*       0.87 / 0.93          59-62
allowCompletion / play      176       176        0.99 / 0.97          60-62
emission rate by distance   155       155        0.87 / 0.83          45-53
```

Drawn and simulated are means over the walk. The two timings are two separate runs, after a warm-up run. *Paused particles still exist and are counted, but nothing advances them.

## What the numbers say

**Drawing is most of the cost here, not simulating.** Hiding the far waterfalls with `setVisible(false)` cut update time from about 2.0 ms to about 0.9 ms, while the simulated count stayed at 363. In this runtime, a hidden instance still simulates but skips its draw step. The emission-rate strategy simulated less than half as many particles and was no faster. For this effect, budget the drawn count first.

**Hiding keeps the mist full when you arrive.** With either hiding strategy, each waterfall had 59 to 63 particles when the player came within 10 m: the same as always on. `pause()` adds nothing measurable on top of hiding at this scale. It's worth it when far-away instances would otherwise simulate for minutes, or when there are many more of them.

**Thinning by distance arrives thin.** The emission-rate strategy had only 45 to 53 particles at 10 m. The particles alive at that moment were born while the player was further away and the rate was lower. If you use it, start ramping further out than where the player will look closely.

**Finish-and-restart depends on walking speed.** With `allowCompletion()` and `play()`, the mist was full on arrival at 4 m/s, because the player took about 2.6 s to get from 20 m to 10 m (the waterfalls stand 4 m off the path), longer than the 2.4 s maximum lifetime. At a sprint of 8 m/s that would be about 1.3 s, so you'd expect thinner mist on arrival. I didn't measure that; it's arithmetic from the same settings.

## A budget you can write down

For this level, the budget I'd put in the task is "at most 260 mist particles drawn at any moment, and full mist when the player is within 10 m". The setVisible strategy meets both: 252 drawn at the busiest moment (162 on average), and 59 to 63 particles on arrival. The NixieFX [Three.js runtime guide](https://nixiefx.com/threejs-runtime/) documents `setVisible()`, `pause()`, `allowCompletion()` and the emitter runtime parameters used above.

## Checklist

- Work out rate × lifetime per emitter, then multiply by the instances in the level.
- Measure drawn and simulated separately. They cost different things.
- Hide distant instances with `setVisible(false)`. Freeze them with `pause()` if they'll be out of range for a long time.
- Check the particle count when the player arrives, not just the average.
- If you thin by distance, ramp the rate up before the player gets close.

## Limits

- Software WebGL in headless Chrome. The timings are useful as a comparison between strategies, not as numbers for a real GPU or phone.
- "Drawn" is what the runtime submits. It doesn't account for the camera frustum, so waterfalls behind the player count as drawn when they're within 20 m.
- I didn't measure screen coverage or overdraw. Big soft particles close to the camera can cost more in fill rate than their count suggests.
- One effect, one level layout, one walking speed.
