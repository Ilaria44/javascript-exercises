const palindromes = function (string) {
  let newString = string
                    .toLowerCase()
                    .replaceAll((/[^a-z^0-9]/g), "");

  let reversedString = newString
                    .split("")
                    .reverse()
                    .join("");

  return newString === reversedString;

};

// Do not edit below this line
module.exports = palindromes;