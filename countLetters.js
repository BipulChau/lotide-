const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let numLetter = {};
  for (let str of sentence) {
    if (str !== " ") {
      if (numLetter[str]) {
        numLetter[str] += 1;
      } else {
        numLetter[str] = 1;
      }
    }

  
  }
  return numLetter;
};

// let letterCounts = countLetters("lighthouse in the house");
// console.log(letterCounts);

// assertEqual(letterCounts["l"], 1);
// assertEqual(letterCounts["h"], 4);
// assertEqual(letterCounts["i"], 5);
// assertEqual(letterCounts["z"], undefined);

module.exports = countLetters;