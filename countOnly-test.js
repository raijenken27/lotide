const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  it('should return { "a": 2, "b": 1 } when given ["a", "b", "a"], { "a": true, "b": false }', () => {
    const inputArray = ["a", "b", "a"];
    const itemsToCount = { "a": true, "b": false };
    const expected = { "a": 2, "b": 1 };
    assert.deepEqual(countOnly(inputArray, itemsToCount), expected);
  });
});
