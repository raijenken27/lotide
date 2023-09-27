const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it('should return { "h": [0], "e": [1], "l": [2, 3], "o": [4] } for "hello"', () => {
    const inputString = "hello";
    const expected = { "h": [0], "e": [1], "l": [2, 3], "o": [4] };
    assert.deepEqual(letterPositions(inputString), expected);
  });
});
