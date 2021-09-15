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

const middle = function(arr) {
  let len = arr.length;
  let midElm = [];
  if (len === 0 || len === 1 || len === 2) {
    return midElm;
  } else {
    let len2 = len / 2;
    if (len % 2 !== 0) {
      midElm.push(arr[Math.floor(len2)]);
      return midElm;
    } else {
      midElm.push(arr[len2 - 1]);
      midElm.push(arr[len2]);
      return midElm;
    }
  }
};

// console.log(eqArrays(middle([1,2,3,4,5]), [3]))

console.log(assertArraysEqual(eqArrays(middle([1,2,3,4,5]), [3]), true));
console.log(assertArraysEqual(eqArrays(middle([1]), []), true));


console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4,5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14]));
