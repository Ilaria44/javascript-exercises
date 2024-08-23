const convertToCelsius = function(fahrenheitDegrees) {
  let celsiusDegrees = (fahrenheitDegrees - 32) * (5 / 9);
  celsiusDegrees = Number(celsiusDegrees.toFixed(1));
  return celsiusDegrees;
};

const convertToFahrenheit = function(celsiusDegrees) {
  let fahrenheitDegrees = celsiusDegrees * (9 / 5) + 32;
  fahrenheitDegrees = Number(fahrenheitDegrees.toFixed(1));
  return fahrenheitDegrees;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
