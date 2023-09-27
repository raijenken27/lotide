/* // Helper function to compare arrays for equality
const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };
  
  // Function to assert if two arrays are equal and log the result
  const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  // Function to return the positions of each letter in a string
  const letterPositions = function(sentence) {
    const results = {};
    // Loop through the sentence
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
      // Skip spaces
      if (char === ' ') {
        continue;
      }
      // If the character is not in the results object, create an array for it
      if (!results[char]) {
        results[char] = [];
      }
      // Push the index into the array for the character
      results[char].push(i);
    }
    return results;
  };
  
  // Test with a small string "hello"
  const result = letterPositions("hello");
  // Expected output: { h: [0], e: [1], l: [2, 3], o: [4] }
  assertArraysEqual(result.h, [0]);
  assertArraysEqual(result.e, [1]);
  assertArraysEqual(result.l, [2, 3]);
  assertArraysEqual(result.o, [4]);
  
  */

  const letterPositions = function(sentence) {
    const results = {};
  
    for (let i = 0; i < sentence.length; i++) {
      const character = sentence[i].toLowerCase();
  
      if (character !== ' ') {
        if (!results[character]) {
          results[character] = [];
        }
        results[character].push(i);
      }
    }
  
    return results;
  };
  
  module.exports = letterPositions;
  