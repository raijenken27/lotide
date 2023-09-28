const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
}

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}

const letterPositions = function (sentence) {
  const results = {}
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i]
    if (char !== ' ') {
      if (!results[char]) {
        results[char] = [i]
      } else {
        results[char].push(i)
      }
    }
  }
  return results
}

const result = letterPositions('hello')
assertArraysEqual(result.h, [0])
assertArraysEqual(result.e, [1])
assertArraysEqual(result.l, [2, 3])
assertArraysEqual(result.o, [4])
