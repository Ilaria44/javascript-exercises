const add = function(num1, num2) {
  let result = num1 + num2;

  return result;
};

const subtract = function(num1, num2) {
  let result;
  if(num1 <= num2) {
    result = num2 - num1;
  } else {
    result = num1 - num2;
  }

  return result;
};

const sum = function(numArray) {
  let result = 0;
	for (num of numArray) {
    result += num;
  }

  return result;
};

const multiply = function(numArray) {
  let result = numArray[0];

  for (i = 1; i < numArray.length; i++) {
    result *= numArray[i];
  }

  return result;
};

const power = function(num1, num2) {
  let result = num1 ** num2;
	
  return result;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }

  let result = num;

  for (i = 1; i < num; i++) {
    result *= i;
  }
  
  return result;	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
