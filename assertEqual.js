 // Implement asserEqual
 
 /* const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
  
assertEqual("Lighthouse Labs", "Bootcamp");  // Comparing identical strings
assertEqual(1, 1);  // Comparing identical numbers
assertEqual("hello", "idk");  // Comparing non-identical strings
assertEqual(111, 222);  // Comparing non-identical numbers

module.exports = assertEqual; 
*/

// Implementing (Template String to assertEqual)

const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  // Example usage
  assertEqual("Lighthouse Labs", "Bootcamp"); // Non-identical strings
  assertEqual(1, 1); // Identical numbers
  

// assertEqual.js

/*
const assertEqual = function(actual, expected) {
    // ...
  };
  
module.exports = assertEqual; // Ensure this line is present
  */