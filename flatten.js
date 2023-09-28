const flatten = function(arr) {
  const flattenedArray = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      for (const innerElement of element) {
        flattenedArray.push(innerElement);
      }
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};

module.exports = flatten;
