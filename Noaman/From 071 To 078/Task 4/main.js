let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];


let lettersArray = numsAndStrings.filter((elem) => typeof elem === 'number').map((elem) => -elem);

console.log(lettersArray);
// [-1, -10, 10, 20, -5, -3]