const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
  
assertEqual("Lighthouse Labs", "Bootcamp");  // Comparing identical strings
assertEqual(1, 1);  // Comparing identical numbers
assertEqual("hello", "idk");  // Comparing non-identical strings
assertEqual(111, 222);  // Comparing non-identical numbers
  