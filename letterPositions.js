const letterPositions = function(sentence) {
  let cleanedSentence = sentence.split('');
  let results = {};

  // Iterate through each character (letter) and its index in the cleaned sentence.
  cleanedSentence.forEach(function(letter, index) {
    // Exclude spaces (non-letter characters) from consideration.
    if (letter !== " ") {
      results[letter] ? results[letter].push(index) : results[letter] = [index];
    }
  });

  return results;
};

module.exports = letterPositions;

