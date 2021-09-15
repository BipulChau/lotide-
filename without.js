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

const without = function(source, itemToRemove) {
  for (let i = 0; i < itemToRemove.length; i++) {
    let newArr = source.filter((item)=> item !== itemToRemove[i]);
    source = newArr;
  } return source;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
