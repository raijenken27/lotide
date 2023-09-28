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

const flatten = function (arr) {
  const flattenedArray = []
  for (const element of arr) {
    if (Array.isArray(element)) {
      for (const innerElement of element) {
        flattenedArray.push(innerElement)
      }
    } else {
      flattenedArray.push(element)
    }
  }
  return flattenedArray
}

// Test case
const result = flatten([1, 2, [3, 4], 5, [6]])
assertArraysEqual(result, [1, 2, 3, 4, 5, 6])
