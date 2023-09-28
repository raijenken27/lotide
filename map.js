const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
  };
  
  const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    }
  };
  
  const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
}
  return true;
};
  
const words = ["ground", "control", "to", "major", "tom"];
  
const results1 = map(words, word => word.toUpperCase());
const expected1 = ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"];
assertArraysEqual(results1, expected1);
  
const results2 = map(words, word => word[0]);
const expected2 = ["g", "c", "t", "m", "t"];
assertArraysEqual(results2, expected2);
  
const results3 = map(words, word => word.length);
const expected3 = [6, 7, 2, 5, 3];
assertArraysEqual(results3, expected3);
  
const results4 = map(words, word => word.toUpperCase().split('').reverse().join(''));
const expected4 = ["DNUORG", "LORTNOC", "OT", "ROJAM", "MOT"];
assertArraysEqual(results4, expected4);
  
  
console.log("Test assertions completed!");
  