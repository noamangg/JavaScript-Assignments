// Method One
// Create Your Object Here
let obj1 = {
  pro1 : 1,
};

console.log(`Object 1 =>`, obj1);
obj1.pro1 = 2023;
console.log(`Object 1 =>`, obj1);

// Method Two
// Create Your Object Here
let obj2 = Object.create(obj1);

console.log(`Object 2 =>`, obj2);
obj1.pro1 = 20234;
console.log(`Object 1 =>`, obj1);
console.log(`Object 2 =>`, obj2);
obj2.pro1 = 120;
console.log(`Object 2 =>`, obj2);
// Method Three
// Create Your Object Here
let obj3 = Object.assign({}, obj2);

console.log(`Object 3 =>`, obj1);

// Method Four
// Create Your Object Here
let obj4 = new Object( obj1);

console.log(obj4); // "Method Four"
console.log(obj4.pro1);
obj4.pro1 = 21;
console.log(obj4); // "Method Four"
console.log(obj4.pro1);
obj1.pro1 = 10;
console.log(obj4.pro1);
console.log(obj4); // "Method Four"
