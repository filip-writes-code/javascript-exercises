const totalIntegers = function (searchObject) {
  let total = 0;

  if (typeof searchObject !== "object") return;

  const values = Object.values(searchObject);
  for (const value of values) {
    if (Number.isInteger(value)) {
      total++;
    }
    if (typeof value === "object" && value !== null)
      total += totalIntegers(value);
  }

  return total;
};

// Do not edit below this line
module.exports = totalIntegers;
