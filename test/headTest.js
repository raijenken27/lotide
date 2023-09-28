const assert = require('chai').assert;
const head = require('../head');
const describe = require('mocha').describe;
const it = require('mocha').it;

describe('#head', () => {
  it('returns 5 for [5, 6, 7]', () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it('returns \'Hello\' for [\'Hello\', \'Lighthouse\', \'Labs\']', () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });

  it('returns 1 for [1]', () => {
    assert.strictEqual(head([1]), 1);
  });

  it('returns undefined for an empty array', () => {
    assert.isUndefined(head([]));
  });
});
