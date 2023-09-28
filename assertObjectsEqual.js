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
