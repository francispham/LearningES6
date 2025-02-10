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

// Calling:
body.append(strong);
body.append(div);
console.log(divII.textContent);
console.log(divII.innerText);

// Attribute Manipulation:
const spanId = document.querySelector("#Id");
const spanTitle = document.querySelector("#title");
console.log("Id:", spanId.getAttribute("id"));
console.log("Title:", spanId.title);

console.log("Modify Title:", spanId.setAttribute("title", "newTitle"));
console.log("Modify Id:", (spanId.id = "newId"));

spanId.removeAttribute("title");

// Data Attribute Manipulation:
