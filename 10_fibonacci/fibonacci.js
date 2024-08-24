const fibonacci = function(num) {
  
  if(typeof(num) != "number") {
    num = Number(num);
  }

  if(num < 0) return "OOPS";
  


  let fibonacciNum = [0, 1];

  for (let i = 2; i <= num; i++) {
    fibonacciNum[i] = fibonacciNum[i-1] + fibonacciNum[i-2];

  }


  return fibonacciNum [num];
};

// Do not edit below this line
module.exports = fibonacci;



