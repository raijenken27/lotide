/* function assertArraysEqual(actual, expected) {
  
  }
  
  function eqArrays(array1, array2) {
   
  }
  
  function flatten(arr) {
    const flattenedArray = [];
  
    for (const element of arr) {
      if (Array.isArray(element)) {
        for (const nestedElement of element) {
          flattenedArray.push(nestedElement);
        }
      } else {
        flattenedArray.push(element);
      }
    }
  
    return flattenedArray;
  }
  

  assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); 
  

  console.log("Test cases completed!"); 
  */

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
  