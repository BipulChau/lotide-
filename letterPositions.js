const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2 [i]) {
        continue;
      } else {
        return false;
      }
    }

  } return true;
};

const assertArraysEqual = function(eqArrays, expected) {
  if (eqArrays === expected) {
    return (`✅ Assertion Passed: ${eqArrays} === ${expected}`);
  } else {
    return (`❌ Assertion Failed: ${eqArrays} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      console.log(sentence[i]);
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }

  return results;
};

// let charIndex = letterPositions("lighthouse in the house");
// console.log(charIndex);

// console.log(assertArraysEqual((eqArrays(charIndex["l"], [0])), true));

module.exports = letterPositions;