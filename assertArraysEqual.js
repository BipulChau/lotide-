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

const assertArraysEqual = function(data1, data2) {
  let isEqual = eqArrays(data1, data2);
    
  let expected = true;
  if (isEqual === expected) {
    return (`✅ Assertion Passed: ${isEqual} === ${expected}`);
  } else {
    return (`❌ Assertion Failed: ${isEqual} !== ${expected}`);
  }
};

console.log(assertArraysEqual([1,2,3], [1,2,3]));
console.log(assertArraysEqual([1,2,3], [2,2,1]));
console.log(assertArraysEqual(["1", "2" ,"3"], ["1","2","3"]));
console.log(assertArraysEqual(["1", "2" ,"3"], ["1","2",3]));