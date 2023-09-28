const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
}

const tail = function (arr) {
  if (arr.length <= 1) {
    return []
  }
  return arr.slice(1)
}

// Test cases
const words = ['Yo Yo', 'Lighthouse', 'Labs']
tail(words)
assertEqual(words.length, 3)

assertEqual(tail([1, 2, 3]).toString(), [2, 3].toString())
assertEqual(tail(['Hello']).toString(), [].toString())
assertEqual(tail([]).toString(), [].toString())
