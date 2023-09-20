// function = head
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

//An array with only one element should still yield that one element as its head
//An empty array should yield undefined as its head

/* const head = function(array) {
    if (array.length === 0) {
      return undefined; // Return undefined for empty arrays
    }
    return array[0]; // Return the first element of the array
  }; */
  
 // const assertEqual = require('./assertEqual');//

 /*  assertEqual(head([5, 6, 7]), 5);
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  assertEqual(head([]), undefined); // An empty array should yield undefined as its head
  assertEqual(head([42]), 42); // An array with only one element should still yield that one element as its head
*/

// head.js

const assertEqual = require('./assertEqual');

const head = function(arr) {
  if (arr && arr.length > 0) {
    return arr[0];
  }
  return undefined; // Return undefined if the array is empty or undefined
};

module.exports = head;

// Test cases for head function
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['hello', 'world']), 'hello');
assertEqual(head([]), undefined);
assertEqual(head(undefined), undefined);
