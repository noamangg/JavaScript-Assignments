let swappingCase = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreBoolean = "Elz123er4o";

let sw = swappingCase
  .split("")
  .map((elem) =>
    elem === elem.toUpperCase() ? elem.toLowerCase() : elem.toUpperCase()
  )
  .join("");
console.log(sw);

let inv = invertedNumbers.map((ele) => -ele);
console.log(inv);

let ign = ignoreBoolean
  .split("")
  .map((ele) => (isNaN(parseInt(ele)) ? ele : ""))
  .join("");
console.log(ign);

let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];

let big = theBiggest.reduce(function (acc, current, index, theBiggest) {
  console.log(`Acca => ${acc}`);
  console.log(`Current => ${current}`);
  return acc.length > current.length ? acc : current;
});
console.log(big);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
let finalString = removeChars
  .filter((ele) => !ele.startsWith("@"))
  .reduce((acc, current) => `${acc}${current}`);

  console.log(finalString);