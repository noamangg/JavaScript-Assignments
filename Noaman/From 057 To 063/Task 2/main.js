
function calculate(firstNum, secondNum, operation) {
  let result = firstNum + secondNum;
  if(secondNum === undefined)
  {
    console.log(`Second Number Not Found`);
    return;
  }
  else if(operation !== undefined)
  {
    if(operation === 'subtract')
    result = firstNum - secondNum;
    else if(operation === 'multiply')
    result = firstNum * secondNum;
  }
  console.log(result);
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600