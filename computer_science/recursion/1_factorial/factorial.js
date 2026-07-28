const factorial = function (input) {
  //if input conditions are not met, return undefined
  if (!Number.isInteger(input) || input < 0) {
    return undefined;
  }
  if (input === 0) {
    // if base case, return 1
    return 1;
  }
  //if not, go into recursion
  return input * factorial(input - 1);
};

// Do not edit below this line
module.exports = factorial;
