let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

arr1.concat(arr2);
arr1.sort();
allArrs.unshift(arr1.pop(), arr1.pop(), arr1.pop())

console.log(allArrs.reverse().join("")); // fxy