const convertToCelsius = function(temp) {
  const tempInCelsius = (temp - 32) * (5/9);
  return Math.round(tempInCelsius * 10) /10 ;
};

const convertToFahrenheit = function(temp) {
  const tempInF = temp * (9/5) + 32;
  return Math.round(tempInF * 10) /10 ;
};

convertToCelsius(100);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
