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
  without(words, ["lighthouse"]);
  assertArraysEqual(words, ["hello", "world", "lighthouse"]); 
  
  
  console.log("Test cases completed!");