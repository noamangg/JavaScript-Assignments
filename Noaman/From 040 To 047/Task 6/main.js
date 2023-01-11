let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

arr1 = arr1.concat(arr2).sort();
allArrs.unshift(arr1.pop().toLowerCase(), arr1.pop().toLowerCase(), arr1.pop().toLowerCase())

console.log(allArrs.reverse().join("")); // fxy