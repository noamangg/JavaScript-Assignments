let mainForm = document.forms[0];
let numberInput = mainForm.querySelector('[name="elements"]');
let textInput = mainForm.querySelector('[name="texts"]');
let submitBtn = mainForm.querySelector('[type = "submit"]');
let resultsDiv = mainForm.querySelector(".results");
let selectOp = mainForm.querySelector("select");
let colorInput = mainForm.querySelector('[type="color"]');
mainForm.onsubmit = function (e) {
  e.preventDefault();
  resultsDiv.innerHTML = "";
  let contentDiv = document.createElement("div");
  let contentSection = document.createElement("section");
  contentDiv.setAttribute("class", "box");
  contentDiv.setAttribute("title", "Element");
  contentSection.setAttribute("class", "box");
  contentSection.setAttribute("title", "Element");
  contentDiv.textContent = `${textInput.value}`;
  contentSection.textContent = `${textInput.value}`;

  contentDiv.setAttribute("style", `background-color: ${colorInput.value}`);
  contentSection.setAttribute("style", `background-color: ${colorInput.value}`);
  for (let i = 1; i <= numberInput.value; i++) {
    if(selectOp.value === "Div"){
        contentDiv.setAttribute("id", `id-${i}`);
        resultsDiv.appendChild(contentDiv.cloneNode(true));
    }
    else {
        contentSection.setAttribute("id", `id-${i}`);
        resultsDiv.appendChild(contentSection.cloneNode(true));
    }
  }
};

