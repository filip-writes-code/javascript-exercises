const permutations = function (nums) {
  let result = [];

  if (nums.length === 0) return [[]];
  if (nums.length === 1) return [nums];

  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];
    let remainingNumbers = nums.toSpliced(i, 1);
    let remainingNumsPermutated = permutations(remainingNumbers);

    for (let j = 0; j < remainingNumsPermutated.length; j++) {
      let permutatedArray = [currentNumber].concat(remainingNumsPermutated[j]);
      result.push(permutatedArray);
    }
  }

  return result;
};

// Do not edit below this line
module.exports = permutations;
