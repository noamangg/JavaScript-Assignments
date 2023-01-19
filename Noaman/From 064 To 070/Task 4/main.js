function specialMix(...data) {
  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") sum += data[i];
    else {
      let number = "";
      for (let j = 0; j < data[i].length; j++) {
        if (data[i][j] % 1 == 0) number += data[i][j];
        else break;
      }
      sum += +number;
    }
  }
  return sum == 0 ? `All Is Strings` : `${sum}`;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
console.log(`You should know that this Algorithm has a bug, if you enter 0 before any string it will not take it as a number`);
