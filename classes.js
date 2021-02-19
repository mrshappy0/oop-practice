class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function () {};
  }

  // Instance Method
  draw() {
    console.log(draw);
  }

  // Static Method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const circle = Circle.parse('{"radius": 1}');b
