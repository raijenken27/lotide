const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('should return [1, 2, 3, 4, 5] when given [1, 2, [3, 4], 5]', () => {
    const inputArray = [1, 2, [3, 4], 5];
    const expected = [1, 2, 3, 4, 5];
    assert.deepEqual(flatten(inputArray), expected);
  });
});
