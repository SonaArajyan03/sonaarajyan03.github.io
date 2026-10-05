// Combo meter with decay and an edge-triggered flare.
// rearmAt === threshold - 1 gives a plain edge trigger; a lower rearmAt adds hysteresis.
export function createCombo({ threshold = 10, rearmAt = 7, decayEvery = 0.5 } = {}) {
  let value = 0, sinceHit = 0, armed = true;
  return {
    get value() { return value; },
    get armed() { return armed; },
    hit() {
      value += 1;
      sinceHit = 0;
      if (armed && value >= threshold) { armed = false; return true; } // true = play the flare
      return false;
    },
    update(dt) {
      sinceHit += dt;
      while (sinceHit >= decayEvery && value > 0) { sinceHit -= decayEvery; value -= 1; }
      if (value <= rearmAt) armed = true;
    },
  };
}
