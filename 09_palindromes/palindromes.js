const palindromes = function (string) {

  let newString = string.toLowerCase().replaceAll(/[^a-z^0-9]/g, "");

  let reverseString = newString.split("").reverse().join("");

  if (newString === reverseString) {
    return true;
  } else {
    return false;
  }
  
  
  };

// Do not edit below this line
module.exports = palindromes;
