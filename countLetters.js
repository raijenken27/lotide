const countLetters = function(string) {
  let cleanedString = string.split(" ").join('');
  let results = {};

  // Iterate through each letter in the cleaned string.
  for (let letter of cleanedString) {
    // Check if the letter exists as a key in 'results'.
    // If it does, increment its count; otherwise, initialize it with a count of 1.
    results[letter] ? results[letter] += 1 : results[letter] = 1;
  }

  return results;
};

module.exports = countLetters;
