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
    console.log (`✅ Assertion Passed: ${eqArrays} === ${expected}`);
  } else {
    console.log (`❌ Assertion Failed: ${eqArrays} !== ${expected}`);
  }
};

assertArraysEqual(eqArrays([1,2,3], [1,2,3]), true)
assertArraysEqual(eqArrays([1,2,3], [2,2,1]), true)
assertArraysEqual(eqArrays(["1", "2" ,"3"], ["1","2","3"]), true)
assertArraysEqual(eqArrays(["1", "2" ,"3"], ["1","2",3]), true)