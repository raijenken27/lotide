const eqArrays = require('./eqArrays')

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1)
  const keys2 = Object.keys(object2)

  if (keys1.length !== keys2.length) {
    return false
  }

  for (const key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false
      }
    } else if (object1[key] !== object2[key]) {
      return false
    }
  }

  return true
}

const shirtObject = { color: 'red', size: 'medium' }
const anotherShirtObject = { size: 'medium', color: 'red' }
console.log(eqObjects(shirtObject, anotherShirtObject)) // => true

const longSleeveShirtObject = { size: 'medium', color: 'red', sleeveLength: 'long' }
console.log(eqObjects(shirtObject, longSleeveShirtObject)) // => false

const multiColorShirtObject = { colors: ['red', 'blue'], size: 'medium' }
const anotherMultiColorShirtObject = { size: 'medium', colors: ['red', 'blue'] }
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject))

const longSleeveMultiColorShirtObject = { size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long' }
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject))
