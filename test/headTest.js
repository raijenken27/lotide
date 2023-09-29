// Import the 'assert' function from the 'chai' library.
const { assert } = require("chai");

// Import the 'head' function from the 'head' module.
const head = require("../head");

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });

  it("returns 1 for [1]", () => {
    assert.strictEqual(head([1]), 1);
  });

  it("returns undefined for an empty array []", () => {
    assert.strictEqual(head([]), undefined);
  });
});
