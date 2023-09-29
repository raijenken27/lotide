const eqArrays = require('./eqArrays');

// Function to compare two arrays for equality.
const assertArraysEqual = function(array1, array2) {
  // Input: Two arrays for comparison.
  // Output: A message indicating if the two arrays are equal or not.

  // Check if the arrays are equal using eqArrays function.
  let equal = eqArrays(array1, array2);
  let result = "";

  // If the arrays are equal, generate a passing message; otherwise, generate a failing message.
  if (equal) {
    result += `✅ Assertion Passed: [${array1}] is equal to [${array2}]`;
  } else {
    result += `🔴 Assertion Failed: [${array1}] is not equal to [${array2}]`;
  }

  // Display the result message.
  console.log(result);
};

module.exports = assertArraysEqual;
