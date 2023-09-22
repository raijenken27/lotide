const eqArrays = require('./eqArrays'); // Import the eqArrays function

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

module.exports = assertArraysEqual;



/* assertArraysEqual.js

const assertArraysEqual = function(array1, array2) {
    // Implementation of assertArraysEqual function
  };
  
  module.exports = assertArraysEqual; // Export the assertArraysEqual function
  */