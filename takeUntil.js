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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const takeUntil = function(array, func) {
  let output = [];
  for (let item of array) {
    if (!(func(item))) {
      output.push(item);
    } else {
      return output;
    }
  } return output;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
let result1 = (takeUntil(data1, x => x < 0));
console.log(result1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(result1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2,[ "I've", "been", "to", "Hollywood"]);



