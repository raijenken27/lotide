// Copy both of the functions from eqArray and assertEqual

function assertArraysEqual(actual, expected) {
 
  }
  
  function eqArrays(array1, array2) {

  }

  function without(source, itemsToRemove) {
    let filteredArray = [];
  
    for (const item of source) {
      if (!itemsToRemove.includes(item)) {
        filteredArray.push(item);
      }
    }
  
    return filteredArray;
  }
  

  assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); 
  assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); 
  
  
  const words = ["hello", "world", "lighthouse"];
  without(words, ["lighthouse"]); // no need to capture return value for this test case
  // Make sure the original array was not altered by the without function
  assertArraysEqual(words, ["hello", "world", "lighthouse"]); 
  
  
  console.log("Test cases completed!");