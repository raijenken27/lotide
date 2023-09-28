const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log('✅ Assertion Passed:', actual, '==', expected)
  } else {
    console.log('🛑 Assertion Failed:', actual, '!=', expected)
  }
}

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

const map = function (array, callback) {
  const results = []
  for (const item of array) {
    results.push(callback(item))
  }
  return results
}

// Test cases
const words = ['ground', 'control', 'to', 'major', 'tom']

const upperCaseWords = map(words, word => word.toUpperCase())
assertArraysEqual(upperCaseWords, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM'])

const wordLengths = map(words, word => word.length)
assertArraysEqual(wordLengths, [6, 7, 2, 5, 3])

const exclamations = map(words, word => word + '!')
assertArraysEqual(exclamations, ['ground!', 'control!', 'to!', 'major!', 'tom!'])
