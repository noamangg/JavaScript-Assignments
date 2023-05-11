let body = document.body;
let bodyElem = body.querySelectorAll("*");

for (let i = 0; i < bodyElem.length; i++) {
  bodyElem[i].onclick = function () {
    console.log(`I am a ${bodyElem[i].tagName}`);
  };
}
