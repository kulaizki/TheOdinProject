const body = document.querySelector("body");
const p = document.createElement("p");
const h3 = document.createElement("h3");
const div = document.createElement("div");
body.appendChild(p);
body.appendChild(h3);
body.appendChild(div);

p.textContent = "Hey I'm Red!";
p.setAttribute("style", "color: red");

h3.textContent = "I'm a blue h3!";
h3.setAttribute("style", "color: blue");

div.setAttribute("style", "background-color: pink; border: 2px solid black; padding: 1rem;");
const h1 = document.createElement("h1");
const p2 = document.createElement("p");

h1.textContent = "I'm in a div";
p2.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p2);