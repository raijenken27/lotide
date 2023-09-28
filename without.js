const without = function(source, itemsToRemove) {
  const result = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

// Test cases
const words = ['hello', 'world', 'lighthouse'];

const result1 = without([1, 2, 3], [1]);
const result2 = without(['1', '2', '3'], [1, 2, 3]);

console.log(result1);
console.log(result2);

console.log('Original array:', words);
console.log('Result after without function:', without(words, ['lighthouse']));
