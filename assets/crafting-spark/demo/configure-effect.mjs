import { readFile, writeFile } from 'node:fs/promises';
const path = new URL('./effects/crafting-spark.json', import.meta.url);
const effect = JSON.parse(await readFile(path, 'utf8'));
const e = effect.emitters[0];
const constant = (base, value) => ({ ...base, mode: 'constant', value, min: value, max: value,
  curve: [{ x: 0, y: value }, { x: 1, y: value }], curveB: [{ x: 0, y: value }, { x: 1, y: value }] });
const random = (base, min, max) => ({ ...base, mode: 'random', value: min, min, max });
effect.timeline.duration = 0.8;
e.id = 'crafting-sparks';
e.name = 'One burst above the slot';
e.loop = false;
e.duration = 0.05;
e.maxParticles = 18;
e.spawn.rate = 0;
e.spawn.rateValue = constant(e.spawn.rateValue, 0);
e.spawn.bursts = [{ time: 0, count: 18, cycles: 1, interval: 0, probability: 1 }];
e.spawn.shape = 'point';
e.spawn.simulationSpace = 'world';
e.initializeParticle.lifetime = random(e.initializeParticle.lifetime, 0.28, 0.45);
e.initializeParticle.size = constant(e.initializeParticle.size, 1);
e.initializeParticle.velocity.mode = 'vector';
e.initializeParticle.velocity.min = [-1.8, 1.4, 0];
e.initializeParticle.velocity.max = [1.8, 2.7, 0];
e.modules.velocity = true;
e.modules.color = true;
e.modules.size = true;
e.forces.gravity = 0;
e.forces.gravityValue = constant(e.forces.gravityValue, 0);
e.forces.drag = 1.8;
e.forces.dragValue = constant(e.forces.dragValue, 1.8);
e.render.blend = 'additive';
e.render.depthTest = false;
e.render.depthWrite = false;
e.render.depthInk = false;
e.render.texture = null;
e.render.material = null;
e.billboard.shape = 'circle';
e.billboard.softness = 0.25;
e.billboard.sizeValue = { ...e.billboard.sizeValue, mode: 'curve',
  curve: [{ x: 0, y: 0.12 }, { x: 1, y: 0.02 }] };
e.color.gradient = { mode: 'blend',
  colorStops: [{ position: 0, color: [1, 0.97, 0.78] }, { position: 1, color: [1, 0.56, 0.16] }],
  alphaStops: [{ position: 0, alpha: 1 }, { position: 0.65, alpha: 0.8 }, { position: 1, alpha: 0 }] };
await writeFile(path, JSON.stringify(effect, null, 2) + '\n');
console.log('Configured 18-particle, non-looping crafting spark.');
