
function assertEqual(actual, expected) {

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
  
  // Test cases
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);  
  assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 

  assertEqual(eqArrays([], []), true); 
  assertEqual(eqArrays([1, 2], [1]), false); 
  

  console.log("All test cases passed!");


  // eqArrays.js

/* const eqArrays = function(array1, array2) {
    // Implementation of eqArrays function
  };
  
  module.exports = eqArrays; // Export the eqArrays function
  
  */

 /* const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        // If both elements are arrays, recursively compare them
        if (!eqArrays(arr1[i], arr2[i])) {
          return false;
        }
      } else if (arr1[i] !== arr2[i]) {
        // If elements are not arrays, compare them directly
        return false;
      }
    }
    
    return true;
  };
  
  // Test cases to demonstrate that eqArrays works for nested arrays
  console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // Should return true
  console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // Should return false
  console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // Should return false
  */