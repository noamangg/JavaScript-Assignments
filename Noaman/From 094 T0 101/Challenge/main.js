let body = document.body;
let script = document.getElementsByTagName("script")[0];
let myHead = document.createElement("header");
let logo = document.createElement("div");
let menu = document.createElement("ul");
let liMenu = document.createElement("li");
let aMenu = document.createElement("a");
let contentSec = document.createElement("section");
let productDiv = document.createElement("div");
let spanPro = document.createElement("span");

let footer = document.createElement("footer");

body.style.cssText = `
font-family: arial; 
margin: 0; 
height: 100vh; 
display: flex;
flex-direction: column;
box-sizing: border-box;`;
myHead.className = "header";
myHead.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 1rem 1.5rem;
    box-sizing: border-box;
    box-shadow: 0 0 10px #eee;  
`;
// Logo
logo.textContent = "Noaman";
logo.classList.add("logo");
logo.style.cssText = `color: #00796B; 
font-weight: bold; 
font-size: 1.5rem;
box-sizing: border-box;
`;
// Menu

menu.style.cssText = `
list-style: none;
padding: 0;
margin: 0;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
gap: 10px;
box-sizing: border-box;
`;
// a
aMenu.setAttribute("href", "#");
aMenu.style.cssText = `
text-decoration: none;
display: block;
color: #616161;
box-sizing: border-box;
`;
let aTitleArray = ["Home", "About", "Service", "Contact"];
liMenu.append(aMenu);
for (let i = 0; i < aTitleArray.length; i++) {
  aMenu.textContent = `${aTitleArray[i]}`;
  menu.append(liMenu.cloneNode(true));
}

body.prepend(myHead);
myHead.prepend(logo);
myHead.append(menu);

// Content

contentSec.style.cssText = `
flex: 1;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
gap: 20px;
background-color: #eee;
padding: 1.5rem;
box-sizing: border-box;
`;

productDiv.setAttribute("class", "product");
productDiv.textContent = "Product";
productDiv.prepend(spanPro);
productDiv.style.cssText = `
background-color: white;
padding: 15px;

text-align: center;
color: grey;
box-sizing: border-box;
`;
spanPro.style.cssText = `
font-size : 2rem;
color: black;
margin: 10px 0;
font-weight: 400;
display: block;
box-sizing: border-box;
`;

for (let i = 1; i <= 15; i++) {
  let productCloned = productDiv.cloneNode(true);
  productCloned.childNodes[0].textContent = `${i}`;
  contentSec.append(productCloned);
}

script.before(contentSec);

// Footer
footer.textContent = "Copyright 2023 Noaman";
footer.style.cssText = `
background-color: #00796b;
text-align: center;
color: white;
padding: 1rem;
font-size: 1.25rem;
font-weight: 500;
`;

script.before(footer);
