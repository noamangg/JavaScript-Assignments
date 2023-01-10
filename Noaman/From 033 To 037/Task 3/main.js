let num1 = 10;
let num2 = 30;
let num3 = "30";

if(num1 < num3)
console.log("Gewwer");
else
console.log("ee");
// Needed Output
// "30 Is Larger Than 10 And Type string Not The Same Type As number"
// "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
// "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

if(num3 > num1 && num3 !== num2)
console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");

if(num3 > num1 && num3 == num2 && num3 !== num2)
console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");

if(num3 !== num1 && num3 !== num2)
console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");