import { Application } from "pixi.js";
import { loadVfxExportBundle } from "nixie-fx/export";
import { PixiVfxRenderer, createPixiVfx2dProjection } from "nixie-fx/pixi";

const PPU = 60; // pixels per effect unit

const getJson = (p) => fetch(new URL(`./vfx/${p}`, import.meta.url)).then((r) => r.json());
const manifest = await getJson("manifest.json");
const effectsByPath = {};
for (const { path } of manifest.effects) effectsByPath[path] = await getJson(path);
const bundle = loadVfxExportBundle(
  { manifest, effectsByPath },
  { requiredBackend: "pixi2d", requiredEffectIds: ["trail-distance", "trail-time"] },
);

const app = new Application();
await app.init({ background: "#0f1020", resizeTo: window, antialias: true });
document.body.prepend(app.canvas);

// y down so pointer pixels map straight to effect units.
const vfx = new PixiVfxRenderer({
  parent: app.stage,
  projection: createPixiVfx2dProjection({ originX: 0, originY: 0, pixelsPerUnit: PPU, yAxis: "down" }),
});

// Pointer events arrive about once per frame. Store the target and catch up
// in small sub-steps, so a fast flick doesn't leave one clump per frame.
const MAX_STEP_PX = 6;
let target = null;
let last = null;

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
let trail = null;
function useEffect(id) {
  if (trail) vfx.removeEffect(trail, true);
  last = null;
  trail = vfx.createEffect(bundle.effectsById.get(id), { position: [-10, -10, 0], autoStart: !reduceMotion });
}
useEffect("trail-distance");

app.stage.eventMode = "static";
app.stage.hitArea = app.screen;
app.stage.on("pointermove", (e) => { target = [e.global.x, e.global.y]; });
// Leaving and re-entering the canvas shouldn't draw a streak between the two points.
app.canvas.addEventListener("pointerleave", () => { target = null; last = null; });

function step(dt) {
  if (!target) return vfx.update(dt);
  const [lx, ly] = last ?? target;
  const [x, y] = target;
  const n = Math.max(1, Math.ceil(Math.hypot(x - lx, y - ly) / MAX_STEP_PX));
  let stats;
  for (let i = 1; i <= n; i++) {
    trail.setPosition([(lx + ((x - lx) * i) / n) / PPU, (ly + ((y - ly) * i) / n) / PPU, 0]);
    stats = vfx.update(dt / n);
  }
  last = target;
  return stats;
}

for (const radio of document.querySelectorAll("input[name=mode]")) {
  radio.addEventListener("change", () => useEffect(radio.value));
}

const count = document.querySelector("#count");
app.ticker.add((ticker) => {
  const stats = step(ticker.deltaMS / 1000);
  count.textContent = reduceMotion ? "(reduced motion: trail off)" : `${stats.activeParticles} particles`;
});
