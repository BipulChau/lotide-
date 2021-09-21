const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

let findKeyByValue = function(obj, val) {
  for (let prop in obj) {
    if (obj[prop] === val) {
      return prop;
    }
  }
};

let bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
let result = findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine");
console.log(result);
// assertEqual(result, "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Mahabharat"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");

module.exports =  findKeyByValue;
