/* test/tailTest.js

const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE for tail function
// ...


*/

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  // Add more test cases as needed
});