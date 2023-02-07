let swappingCase = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreBoolean = "Elz123er4o";

let sw = swappingCase
  .split("")
  .map((elem) =>
    elem === elem.toUpperCase() ? elem.toLowerCase() : elem.toUpperCase()
  ).join("");
console.log(sw);


let inv = invertedNumbers.map((ele) => -ele);
console.log(inv);

let ign = ignoreBoolean.split("").map((ele) => isNaN(parseInt(ele)) ? ele : ""
).join("");
console.log(ign);
