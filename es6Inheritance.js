class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log("move");
  }
}
class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  draw() {
    console.log("draw");
  }
  move() {
    super.move();
    console.log("circle move");
  }
}

const c = new Circle("red");
