const isAnObject = (val) =>
  val !== null && typeof val === "object" && !Array.isArray(val);

const contains = function (searchObject, searchValue) {
  const values = Object.values(searchObject);
  if (values.includes(searchValue)) return true;

  const nestedObjects = values.filter((value) => isAnObject(value));
  for (const object of nestedObjects) {
    const recursiveSearch = contains(object, searchValue);
    if (recursiveSearch) return true;
  }
  return false;
};

// Do not edit below this line
module.exports = contains;
