let myArray = ["E", "l", "z", ["e", "r"], "o"];

console.log(myArray[3]);
myArray[3] = myArray[3].reduce((acc, current) => `${acc}${current}`);
console.log(myArray);

let yourArray = myArray.reduce((acc, current) => `${acc}${current}`);
console.log(yourArray);
// Elzero
