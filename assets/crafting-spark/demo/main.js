import { Application, Container, Graphics, Point, Text } from 'pixi.js';
import { loadVfxExportBundle } from 'nixie-fx/export';
import { PixiVfxRenderer, createPixiVfx2dProjection } from 'nixie-fx/pixi';

async function main() {
const app = new Application();
await app.init({ width: 900, height: 430, background: '#172232', antialias: true, resolution: 1, autoDensity: true });
document.querySelector('#scene').appendChild(app.canvas);
app.stop();
const json = async (url) => { const r = await fetch(url); if (!r.ok) throw new Error(`${r.status}: ${url}`); return r.json(); };
const manifest = await json('/vfx/manifest.json');
const effectsByPath = Object.fromEntries(await Promise.all(manifest.effects.map(async e => [e.path, await json(`/vfx/${e.path}`)])));
const bundle = loadVfxExportBundle({ manifest, effectsByPath, assetPaths: manifest.assets.map(a => a.path) },
  { requiredBackend: 'pixi2d', requiredEffectIds: ['crafting-spark'], requireEveryAsset: true });
if (manifest.assets.length) throw new Error('This example intentionally uses no file assets.');
const definition = bundle.effectsById.get('crafting-spark');
const ui = new Container();
const vfxLayer = new Container();
app.stage.addChild(ui, vfxLayer);
const text = (value, x, y, size, fill, parent = ui) => {
  const t = new Text({ text: value, style: { fontFamily: 'Arial', fontSize: size, fill } });
  t.position.set(x, y); parent.addChild(t); return t;
};
text('CRAFTING BENCH', 34, 24, 13, '#92adc9');
text('One accepted event. One short burst.', 34, 46, 24, '#e7eef8');
const slots = [];
['COPPER ORE', 'IRON INGOT'].forEach((name, i) => {
  const slot = new Container(); slot.position.set(255 + i * 300, 175); ui.addChild(slot); slots.push(slot);
  slot.addChild(new Graphics().roundRect(0, 0, 112, 112, 12).fill('#21344b').stroke({ color: i ? '#dbaa54' : '#536b88', width: 2 }));
  const item = new Graphics();
  if (i) item.poly([27, 49, 58, 38, 84, 51, 84, 71, 52, 82, 27, 69]).fill('#d1dae6').stroke({ color: '#7d94af', width: 2 });
  else item.poly([30, 59, 42, 36, 67, 40, 84, 62, 66, 83, 38, 80]).fill('#c78961').stroke({ color: '#925a3f', width: 2 });
  slot.addChild(item);
  text(name, 0, 128, 14, '#dbe7f5', slot);
  text(i ? 'Quantity: 1' : 'Quantity: 2', 0, 150, 13, '#99b0cb', slot);
});
text('The spark is placed 14 pixels above the slot, leaving the item and labels clear.', 34, 384, 15, '#a9bfd8');

const PPU = 80;
const renderer = new PixiVfxRenderer({ parent: vfxLayer,
  projection: createPixiVfx2dProjection({ pixelsPerUnit: PPU, yAxis: 'up' }) });
const fx = renderer.createEffect(definition, { autoStart: false, seed: 379 });
const seen = new Set();
let serial = 0, lastEvent = null, age = 0, peak = 0, moved = false, closed = false, manual = false;
const record = { packageVersions: { pixi: '8.22.0', nixieFx: '0.1.20' }, backend: 'pixi2d', manifestValidation: manifest.validation,
  support: manifest.effects[0].support, checks: [] };
const message = document.querySelector('#message');
function anchor() {
  const p = vfxLayer.toLocal(slots[1].toGlobal(new Point(56, -14)));
  return [p.x / PPU, -p.y / PPU, 0];
}
function snapshot() {
  const s = renderer.stats;
  return { time: +age.toFixed(3), activeParticles: s.activeParticles, effectCount: s.effectCount,
    missingTextureRefs: s.missingTextureRefs, missingMaterialRefs: s.missingMaterialRefs,
    missingSubEmitterRefs: s.missingSubEmitterRefs, unsupportedModules: s.unsupportedModules, unsupportedFeatures: s.unsupportedFeatures,
    anchorPixels: anchor().slice(0, 2).map((v, i) => +(v * PPU * (i ? -1 : 1)).toFixed(3)) };
}
function report() {
  document.querySelector('#stats').textContent = JSON.stringify({ latest: snapshot(), peakParticles: peak, checks: record.checks }, null, 2);
}
function step(dt) {
  renderer.update(dt); age += dt; peak = Math.max(peak, renderer.stats.activeParticles);
  if (age >= 0.8 && renderer.stats.activeParticles === 0 && !manual) app.stop();
}
function onCraftCompleted(event) {
  if (closed || event.status !== 'accepted' || event.slotId !== 'iron' || seen.has(event.id)) return false;
  seen.add(event.id); if (seen.size > 32) seen.delete(seen.values().next().value);
  lastEvent = event; age = 0; peak = 0;
  fx.reset({ position: anchor(), seed: 379 });
  return true;
}
app.ticker.add(ticker => { step(ticker.deltaMS / 1000); report(); });
function fresh() { return { id: `craft-${++serial}`, status: 'accepted', slotId: 'iron' }; }
function inspect(time) {
  app.stop(); manual = true; onCraftCompleted(fresh());
  for (let i = 0; i < Math.round(time * 120); i++) step(1 / 120);
  app.render(); report(); manual = false;
}
document.querySelector('#accept').onclick = () => {
  if (onCraftCompleted(fresh())) { manual = false; app.start(); message.textContent = 'Accepted craft: one burst above the iron slot.'; }
};
document.querySelector('#duplicate').onclick = () => {
  const ignored = lastEvent ? !onCraftCompleted(lastEvent) : true;
  record.checks.push({ check: 'duplicate accepted event', ignored }); message.textContent = `Duplicate ignored: ${ignored}`; report();
};
document.querySelector('#reject').onclick = () => {
  app.stop(); inspect(0.8); const triggered = onCraftCompleted({ id: `rejected-${++serial}`, status: 'rejected', slotId: 'iron' });
  record.checks.push({ check: 'rejected event', triggered, activeParticles: renderer.stats.activeParticles });
  message.textContent = 'Rejected event: no new burst.'; report();
};
document.querySelector('#frame').onclick = () => { inspect(0.1); message.textContent = 'Paused at 0.10 seconds after an accepted craft.'; };
document.querySelector('#finish').onclick = () => { inspect(0.8); record.checks.push({ check: 'drained at 0.8s', ...snapshot(), peakParticles: peak }); message.textContent = 'Paused at 0.80 seconds; inspect the particle count.'; report(); };
document.querySelector('#stress').onclick = () => {
  app.stop(); const samples = [];
  for (let i = 0; i < 20; i++) { inspect(0.8); samples.push({ peak, after: renderer.stats.activeParticles, effectCount: renderer.stats.effectCount }); }
  record.checks.push({ check: '20 sequential accepted events', samples }); message.textContent = 'Checked 20 events with a fixed 120 Hz clock.'; report();
};
document.querySelector('#shift').onclick = () => {
  moved = !moved; ui.scale.set(moved ? 0.8 : 1); ui.position.set(moved ? 90 : 0, moved ? 30 : 0);
  inspect(0.1); record.checks.push({ check: 'moved and scaled inventory', moved, ...snapshot() }); report();
};
document.querySelector('#hide').onclick = () => {
  closed = !closed; app.stop(); fx.stop(); ui.visible = !closed; vfxLayer.visible = !closed;
  document.querySelector('#hide').textContent = closed ? 'Open inventory' : 'Close inventory';
  for (const id of ['accept', 'duplicate', 'reject', 'frame', 'finish', 'stress', 'shift']) document.querySelector(`#${id}`).disabled = closed;
  message.textContent = closed ? 'Inventory closed: ticker stopped; subsequent crafts ignored.' : 'Inventory open: accept a new craft to resume.';
  record.checks.push({ check: 'inventory visibility', closed, tickerStarted: app.ticker.started }); app.render(); report();
};
function download(data, type, name) {
  const url = URL.createObjectURL(new Blob([data], { type })); const a = document.createElement('a'); a.href = url; a.download = name; a.click(); URL.revokeObjectURL(url);
}
document.querySelector('#save').onclick = () => download(JSON.stringify({ ...record, final: snapshot(), userAgent: navigator.userAgent }, null, 2), 'application/json', 'crafting-spark-verification.json');
document.querySelector('#image').onclick = () => { app.render(); app.canvas.toBlob(blob => { if (blob) download(blob, 'image/png', 'crafting-spark-canvas.png'); }); };
window.addEventListener('pagehide', () => { app.stop(); renderer.destroy(); app.destroy(true, { children: true }); });
document.addEventListener('visibilitychange', () => { if (document.hidden) app.stop(); });
message.textContent = 'Ready. Crafting event controls are local simulations.';
app.render(); report();
}
main().catch(error => {
  document.querySelector('#message').textContent = `Demo failed to load: ${error.message}`;
  console.error(error);
});
