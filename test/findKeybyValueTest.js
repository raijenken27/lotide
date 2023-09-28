const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  it('should return "drama" for { sciFi: "fantasy", drama: "period" }, "period"', () => {
    const inputObject = { sciFi: "fantasy", drama: "period" };
    const searchValue = "period";
    const expected = "drama";
    assert.strictEqual(findKeyByValue(inputObject, searchValue), expected);
  });
});
