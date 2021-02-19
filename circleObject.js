// Hide the details, show the essentials => abstraction
function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Circle(radius, color) {
  Shape.call(this, color);

  this.radius = radius;

  this.move = function () {
    console.log("move");
  };

  // let makes scope confined => becomes hidden
  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = () => {
    return defaultLocation;
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid Location");
      defaultLocation = value;
    },
  });
}

extend(Circle, Shape);

// override duplicate
Circle.prototype.duplicate = function () {
  // call original duplicate
  Shape.prototype.duplicate.call(this);
  console.log("duplicate circle");
};
// This function will be repeated on all circles within proto
Circle.prototype.draw = function () {
  this.move();
  //defaultLocation

  console.log("draw");
};

Circle.prototype.toString = function () {
  return "Circle with radius " + this.radius;
};

function Square(size) {
  this.size = size;
}

extend(Square, Shape);

const shapes = [new Circle(), new Square()];

for (let shape of shapes) {
  shape.duplicate();
}
// const circle = new Circle(10, "red");
// const square = new Square(10, "red");
