function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function () {
    this.hunger--;
    console.log("eating");
  },
};
const canWalk = {
  walk: function () {
    console.log("walking");
  },
};
const canSwim = {
  walk: function () {
    console.log("swim");
  },
};

function Person() {}
function Goldfish() {}

mixin(Person.prototype, canEat, canSwim, canWalk);
mixin(Goldfish.prototype, canEat, canSwim);

const person = new Person();
const goldfish = new Goldfish();
console.log(person, goldfish);
