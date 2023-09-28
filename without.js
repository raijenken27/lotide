const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

const assertArraysEqual = function (arr1, arr2) {
  const message = eqArrays(arr1, arr2)
    ? '✅✅✅ Assertion Passed: Arrays are equal'
    : '🛑🛑🛑 Assertion Failed: Arrays are not equal'
  console.log(message)
}

const without = function (source, itemsToRemove) {
  const result = []
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      result.push(item)
    }
  }
  return result
}

// Test cases
const words = ['hello', 'world', 'lighthouse']
const result1 = without(words, ['lighthouse'])
assertArraysEqual(result1, ['hello', 'world'])

const numbers = [1, 2, 3, 4, 5]
const result2 = without(numbers, [2, 4])
assertArraysEqual(result2, [1, 3, 5])

const emptyArray = []
const result3 = without(emptyArray, [])
assertArraysEqual(result3, [])
