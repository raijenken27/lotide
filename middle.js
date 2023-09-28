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

const middle = function (array) {
  const middleIndex = Math.floor(array.length / 2)
  if (array.length <= 2) {
    return []
  }
  if (array.length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]]
  } else {
    return [array[middleIndex]]
  }
}

// Test cases
assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2]), [])
assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
