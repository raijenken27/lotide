const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  };


  const countLetters = function(sentence) {
    const letterCount = {};
  
    for (const letter of sentence) {
      if (letter !== ' ') { // Exclude spaces from counting
        if (letterCount[letter]) {
          letterCount[letter] += 1;
        } else {
          letterCount[letter] = 1;
        }
      }
    }
  
    return letterCount;
  };
  
  // Test cases
  const result = countLetters("LHL");
  assertEqual(result["L"], 2);
  assertEqual(result["H"], 1);
  
  console.log("Test cases completed!");