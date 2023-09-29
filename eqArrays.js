const eqArrays = function(array1, array2) {

  let equal = true;
  // Check if the array1 and array2 have the same length.
  if (array1.length === array2.length) {
    // Loop through the elements of array1 and array2 for comparison.
    for (let i = 0; i < array1.length; i++) {
      if (Array.isArray(array1[i])) {
        equal =  eqArrays(array1[i], array2[i]);
      } else if (array1[i] === array2[i]) {
        // // If elements are of the same value and type, mark as equal. Otherwise, mark as not equal and exit the loop.
        equal = true;
      } else {
        equal = false;
        return equal;
      }
    }
  } else {
    equal = false;
    return equal;
  }

  return equal;
};

module.exports = eqArrays;