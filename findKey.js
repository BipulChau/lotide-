const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  } return undefined;
};

let bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

let result = findKey(bestTVShowsByGenre, x => x === "The Wire");
console.log (result)

let result1 = findKey({    "Blue Hill": { stars: 1 },    "Akaleri": { stars: 3 },    "noma": { stars: 2 },    "elBulli": { stars: 3 },    "Ora": { stars: 2 },    "Akelarre": { stars: 3 }  }, x => x.stars === 2)
console.log(result1)
assertEqual(findKey({    "Blue Hill": { stars: 1 },    "Akaleri": { stars: 3 },    "noma": { stars: 2 },    "elBulli": { stars: 3 },    "Ora": { stars: 2 },    "Akelarre": { stars: 3 }  }, x => x.stars === 2), "noma")
