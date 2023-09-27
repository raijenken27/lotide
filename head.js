const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  const head = function(array) {
    if (array.length === 0) {
      return undefined;
    }
    return array[0];
  };
  
  // Test cases
  assertEqual(head([5, 6, 7]), 5);
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  assertEqual(head([]), undefined);
  assertEqual(head([42]), 42);
  


  console.log("Test assertions completed!");  

  module.exports = head;

// head.js

/* const assertEqual = require('./assertEqual');

const head = function(arr) {
  if (arr && arr.length > 0) {
    return arr[0];
  }
  return undefined; // Return undefined if the array is empty or undefined
};

module.exports = head;

*/
