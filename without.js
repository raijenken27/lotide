// Function to check if elements in array1 are included in array2.
const included = function(array1, array2) {
  // Input: Two arrays.
  // Output: An array of booleans indicating if elements in array1 are included in array2.

  let outputArray = [];

  // For each element in array1, check if it is in array2.
  // If an element in array1 is found in array2, mark it as included in the output array.
  for (let i = 0; i < array1.length; i++) {
    let includes = false;
    if (array2.includes(array1[i])) {
      includes = true;
    }
    outputArray.push(includes);
  }

  return outputArray;
};

// Function to remove elements from array1 that are present in array2.
const without = function(array1, array2) {
  // Input: Two arrays.
  // Output: An altered array that removes elements from array1 that are also in array2.

  // Use the 'included' function to identify which elements are included in array2.
  let includedArray = included(array1, array2);
  let outputArray = [];

  // Iterate through includedArray and add elements from array1 to the output array
  // if they are not marked as included (false) in includedArray.
  for (let i = 0; i < includedArray.length; i++) {
    if (includedArray[i] === false) {
      outputArray.push(array1[i]);
    }
  }
  
  return outputArray;
};

module.exports = included, without;

// console.log(without([1,2,3,1], [1,2]));
// console.log(without([1,2,3],[1]));
// let words = ["hello", "world", "lighthouse"];
// console.log(without(["hello", "world", "lighthouse"], ["lighthouse" "hello"]));
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);