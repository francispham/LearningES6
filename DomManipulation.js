const body = document.body;
// body.append("Append", " a Div");
// body.appendChild("appendChild");

const div = document.createElement("div");
// div.innerText = "innerText Div";
// div.textContent = "textContent Div";
div.innerHTML = "<strong>innerHTML</strong>";

const strong = document.createElement("strong");
strong.innerText = "innerText & strong";

const divII = document.querySelector("div");

/* Adding DOM Elements */
body.append(strong);
body.append(div);
console.log(divII.textContent);
console.log(divII.innerText);

/* Downward DOM Traversal */
const grandParent = document.getElementById("grandparent-id");

function changeColor(element) {
  element.style.backgroundColor = "#333";
}

// Change the background color of the grandparent element
// changeColor(grandParent, "#333");

// Use getElementsByClassName to get all elements with the class name "parent"
// This returns an HTMLCollection, which is a live collection of elements
const parents = document.getElementsByClassName("parent");

// parents.forEach(changeColor); => This will not work as getElementsByClassName returns an HTMLCollection, not an array;

// Using Array.from to convert HTMLCollection to an array
const parentsArray = Array.from(parents);
// parentsArray.forEach(changeColor);

// Use querySelectorAll to get all elements with the class name "parent"
const parentsQuery = document.querySelectorAll(".parent");
// parentsQuery.forEach(changeColor); // => This will work as querySelectorAll returns a NodeList, which is iterable

// Use querySelector to get the first element with the class name "parent"
const firstParent = document.querySelector(".parent");
const children = Array.from(firstParent.children);
// children.forEach(changeColor);

/* Upward DOM Traversal */
const childOne = document.querySelector("#child-one");
const parent = childOne.parentElement;
const grandParentUpward = childOne.closest("#grandparent-id");

/* DOM Siblings Traversal */
// Get the next sibling of childOne
const childTwo = childOne.nextElementSibling;

// Change the background color of childOne
changeColor(childTwo.previousElementSibling);

/* Attribute Manipulation */
const spanId = document.querySelector("#Id");
const spanTitle = document.querySelector("#title");
console.log("Id:", spanId.getAttribute("id"));
console.log("Title:", spanId.title);

console.log("Modify Title:", spanId.setAttribute("title", "newTitle"));
console.log("Modify Id:", (spanId.id = "newId"));

spanId.removeAttribute("title");

/* Data Attribute Manipulation */
