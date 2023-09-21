/* test/middleTest.js

const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE for middle function
// ...

*/

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  // Add more test cases as needed
});
