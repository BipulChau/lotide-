const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  for (let prop in obj) {
    if (callback(prop)) {
      return prop;
    }
  } return undefined;
};

let bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

let result = findKey(bestTVShowsByGenre, x => bestTVShowsByGenre[x]==="The Wire");
console.log (result)

