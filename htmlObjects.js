function HtmlElement(value) {
  this.value = value;
  this.click = function () {
    value = value + 1;
    console.log("clicked", value);
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = function (item) {
    this.items.push(item);
    console.log(this.items);
  };
  this.removeItem = function (item) {
    let index = items.indexOf(item);
    this.items.splice(index, 1);
    console.log(this.items);
  };

  this.render = function () {
    return `
        <select>
        ${this.items.map((item) => renderItem(item)).join("")}
        </select>`;
  };
}

const renderItem = (item) => `<option>${item}</option>`;

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
  this.src = src;

  this.render = function () {
    return `<img src="${this.src}" />`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const list = new HtmlSelectElement([1, "bob", "frank"]);
const image = new HtmlImageElement(
  "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
);
let div = document.getElementById("list");
div.innerHTML = list.render() + "<br>" + image.render();
