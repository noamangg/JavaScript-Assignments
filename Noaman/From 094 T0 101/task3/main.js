let ourElement = document.querySelector(".our-element");

ourElement.nextElementSibling.remove();
let textContent = document.createTextNode("Start");
let beforeElement = document.createElement("div");
beforeElement.className = "start";
beforeElement.setAttribute("title", "Start Element");
beforeElement.setAttribute("data-value", "Start");
beforeElement.appendChild(textContent);

let afterElement = document.createElement("div");
afterElement.className = "end";
afterElement.setAttribute("title", "End Element");
afterElement.setAttribute("data-value", "End");
afterElement.textContent = "End";


ourElement.before(beforeElement);
ourElement.after(afterElement);
