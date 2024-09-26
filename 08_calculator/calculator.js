const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(numbersArray) {
	return numbersArray.reduce((sum, currentItem) => sum + currentItem, 0);
};

const multiply = function(numbersArray) {
  return numbersArray.reduce((total, currentItem) => total * currentItem);
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(input) {
  if (input === 0) {
    return 1;
  }
  let result = 1;
  for (let i = input; i > 0; i--) {
    result = result * i;
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
