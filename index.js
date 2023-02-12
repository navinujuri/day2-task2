const parentContainer = document.querySelector(".parent");
// const parentContainer = document.getElementsByClassName(".parent");
// foreach loop is accesable only for queryselectorall not for getElementsByClassName, therefore we use queryselctorall for class
const colorBtn = document.getElementById("changeColor");
const addChildBtn = document.getElementById("addChild");
const removeChildBtn = document.getElementById("removeChild");

function colorChange() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  parentContainer.style.backgroundColor = `#${randomColor}`;
}
let counter = 0;
function addChild() {
  counter++;
  const child = document.createElement("div");
  // const textnode = document.createTextNode("child");
  // child.appendChild(textnode);
  // child.style.border = "2px solid black";
  // parentContainer.appendChild(child);
  child.innerText = `Child ${counter}`;
  child.style.border = "2px solid black";
  parentContainer.appendChild(child);
}

function fun2() {
  counter--;
  //parentContainer.remove() ie removes that parentcontainer
  parentContainer.removeChild(parentContainer.lastChild);
}
