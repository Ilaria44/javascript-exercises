const reverseString = function(text) {

  let textArray = text.split("");
  textArray.reverse();

  let newText = textArray.join("");

  return newText;
  
};

// Do not edit below this line
module.exports = reverseString;
