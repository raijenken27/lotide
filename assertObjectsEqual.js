const eqObjects = require('./eqObjects'); // Import the eqObjects function

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // Import the inspect function from the util library

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;


/* const eqArrays = require('./eqArrays'); // You should have eqArrays implemented

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;


*/ 

// This is test for other files

/* const assertObjectsEqual = require('./assertObjectsEqual');

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, a: 1 };

assertObjectsEqual(obj1, obj2);

*/
