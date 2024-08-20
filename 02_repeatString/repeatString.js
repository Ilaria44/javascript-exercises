const repeatString = function(stringToBeRepeated, numOfRepetitions) {
  let finalString = "";

  if(numOfRepetitions >= 0) {

    for (let i = 0; i < numOfRepetitions; i++) {
      finalString += stringToBeRepeated;
    };

  } else {
    finalString = "ERROR";
  }

  return finalString;
};

// Do not edit below this line
module.exports = repeatString;
