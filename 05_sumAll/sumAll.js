const sumAll = function(num1, num2) {

  let sum = 0;
  
  if (typeof(num1) != "number" || typeof(num2) != "number" || num1 < 0 || num2 < 0 || Math.floor(num1) != num1 || Math.floor(num2) != num2) {
    return "ERROR";
  }

  if (num1 <= num2) {
    for (i = num1; i <= num2; i++) {
      sum += i;
    }
  } else {
    for (i = num2; i <= num1; i++) {
      sum += i;
    }
  }


  return sum;


};

// Do not edit below this line
module.exports = sumAll;
