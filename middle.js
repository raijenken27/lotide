/* function assertArraysEqual(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    }
  }
  
  function eqArrays(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  
  function middle(array) {
    const length = array.length;
    const middleIndex = Math.floor(length / 2);
  
    if (length <= 2) {
      return [];
    }
  
    if (length % 2 === 0) {
      return [array[middleIndex - 1], array[middleIndex]];
    } else {
      return [array[middleIndex]];
    }
  }
  
  // Test cases
  assertArraysEqual(middle([1]), []);
  assertArraysEqual(middle([1, 2]), []);
  assertArraysEqual(middle([1, 2, 3]), [2]);
  assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
  assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
  assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  
  console.log("Test assertions completed!");
  
  */

  // middle.js

const middle = function(array) {
  const length = array.length;
  const middleIndex = Math.floor(length / 2);

  if (length <= 2) {
    return [];
  }

  if (length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return [array[middleIndex]];
  }
};

module.exports = middle;
