const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')

// Test cases
console.log('Test Case 1:')
const arr1 = [1, 2, 3, 4, 5]
assertArraysEqual(middle(arr1), [3])

console.log('\nTest Case 2:')
const arr2 = [1, 2, 3, 4]
assertArraysEqual(middle(arr2), [2, 3])
console.log('\nTest Case 3:')
const arr3 = [1, 2]
assertArraysEqual(middle(arr3), [])

console.log('\nTest Case 4:')
const arr4 = [1, 2, 3]
assertArraysEqual(middle(arr4), [2])
