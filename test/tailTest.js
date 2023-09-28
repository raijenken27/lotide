const assert = require('chai').assert;
const tail = require('../tail');
const describe = require('mocha').describe;
const it = require('mocha').it;

describe('#tail', () => {
  it('returns [2, 3] for [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it('returns [] for [1]', () => {
    assert.deepEqual(tail([1]), []);
  });

  it('returns [] for an empty array', () => {
    assert.deepEqual(tail([]), []);
  });

  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});
