

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];


let result = mix.map(
  (elem) => !(typeof elem === 'number') ? elem : ""
).reduce((acc, curr) => `${acc}${curr}`)

console.log(result);
// Elzero