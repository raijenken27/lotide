const flatten = function(arr) {
    const flattenedArray = [];
  
    for (const element of arr) {
      if (Array.isArray(element)) {
        flattenedArray.push(...element);
      } else {
        flattenedArray.push(element);
      }
    }
  
    return flattenedArray;
  };
  
  module.exports = flatten;
  