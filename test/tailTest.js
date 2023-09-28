const assertEqual = require('../assertEqual')
const tail = require('../tail')

// Test cases
const words = ['Yo Yo', 'Lighthouse', 'Labs']
tail(words)
assertEqual(words.length, 3)

assertEqual(tail([1, 2, 3]).toString(), [2, 3].toString())
assertEqual(tail(['Hello']).toString(), [].toString())
assertEqual(tail([]).toString(), [].toString())
