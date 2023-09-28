const assertEqual = require('../assertEqual')
const countOnly = require('../countOnly')

// Test case 1
const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe'
]

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false
})

assertEqual(result1.Jason, 1)
assertEqual(result1.Karima, undefined)
assertEqual(result1.Fang, 2)
assertEqual(result1.Agouhanna, undefined)

// Test case
const result2 = countOnly(['a', 'b', 'a'], { a: true, b: false })

assertEqual(result2.a, 2)
assertEqual(result2.b, undefined)