const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

// Test cases
const restaurantRatings = {
  'Blue Hill': { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 }
};

const result1 = findKey(restaurantRatings, x => x.stars === 2);
assertEqual(result1, 'noma');
const result2 = findKey(restaurantRatings, x => x.stars === 4);
assertEqual(result2, undefined);

const result3 = findKey(restaurantRatings, x => x.stars === 1);
assertEqual(result3, 'Blue Hill');

const result4 = findKey(restaurantRatings, x => x.stars === 3);
assertEqual(result4, 'Akaleri');
