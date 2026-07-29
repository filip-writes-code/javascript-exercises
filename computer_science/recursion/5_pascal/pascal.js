const pascal = function (n, result = []) {
  if (n === 1) return [1];

  let previousRow = pascal(n - 1);
  previousRow.push(0);
  previousRow.unshift(0);

  for (let i = 0; i < previousRow.length - 1; i++) {
    const cell = previousRow[i] + previousRow[i + 1];
    result.push(cell);
  }

  return result;
};

// Do not edit below this line
module.exports = pascal;
