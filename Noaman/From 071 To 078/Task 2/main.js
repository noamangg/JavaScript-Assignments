let myString = "EElllzzzzzzzeroo";

let yourString = myString
  .split("")
  .filter((elem, index) => elem !== myString[index + 1])
  .reduce((acc, current) => `${acc}${current}`);
  
  console.log(yourString);
// Elzero
