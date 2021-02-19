const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }

  [_draw]() {
    console.log("draw");
  }
}

// WeakMap
const _radius = new WeakMap();
const _color = new WeakMap();
const _openHouse = new WeakMap();

class House {
  constructor(color, radius) {
    _color.set(this, color);
    _radius.set(this, radius);
    _openHouse.set(this, () => {
      console.log("openHouse", this);
    });
  }

  get radius() {
    return _radius.get(this);
  }
  set radius(value) {
    if (value <= 0) throw new Error("invalid radius");
    _radius.set(this, value);
  }

  draw() {
    _openHouse.get(this)();
    console.log("openHouse");
  }
}
