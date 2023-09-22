/* // Import the assertEqual function (if it's not already available in this file)
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  // Implement the tail function
  const tail = function(array) {
    if (array.length <= 1) {  // Refering to the diagram
      return [];
    }
    return array.slice(1);
  };
  
  // Test cases
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  const result = tail(words);
  assertEqual(result.length, 2); // Expecting 2 elements in the returned array
  assertEqual(result[0], "Lighthouse"); // Expecting the first element to be "Lighthouse"
  assertEqual(result[1], "Labs"); // Expecting the second element to be "Labs"
  
  // Check if the original array is not modified
  assertEqual(words.length, 3); // Expecting the original array to still have 3 elements
  
  // Additional test cases
  const emptyArray = [];
  const singleElementArray = ["Only"];
  const tailOfEmpty = tail(emptyArray);
  const tailOfSingle = tail(singleElementArray);
  
  assertEqual(tailOfEmpty.length, 0); // Expecting an empty array for tail of empty array
  assertEqual(tailOfSingle.length, 0); // Expecting an empty array for tail of single element array
  
  // node.js node tail.js
//✅ Assertion Passed: 2 === 2
//✅ Assertion Passed: Lighthouse === Lighthouse
//✅ Assertion Passed: Labs === Labs
//✅ Assertion Passed: 3 === 3
//✅ Assertion Passed: 0 === 0
//✅ Assertion Passed: 0 === 0 

*/

// tail.js
const tail = function(array) {
    if (array.length <= 1) {
      return [];
    }
    return array.slice(1);
  };
  
  module.exports = tail;
  