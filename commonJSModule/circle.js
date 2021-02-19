// Implementation Detail
const _radius = new WeakMap();

// Public Interface
export class Bonk {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("Circle with Radius" + _radius.get(this));
  }
}
