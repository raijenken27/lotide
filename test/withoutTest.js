const { assert } = require("chai");
const without = require("../without");

describe("#without", () => {
  it("should return [ '1', '2' ] when passed ['1', '2', '3'] and the values not to include: [1, 2, '3']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it("should return [ 2, 3 ] when passed [1, 2, 3] and the value not to include: [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [ 2, 3 ]);
  });
  it("should return [ 'hello', 'world' ] when passed ['hello', 'world', 'lighthouse'] and the value not to include: ['lighthouse']", () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), [ "hello", "world" ]);
  });
});