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
    console.log (`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log (`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback){
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  const results =[];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    results.push(callback(item));
  }
  return results;
}
const result1 = map(words, word => word[1]);

console.log (result1)

// let sal = [1, 2, 3]
// let newSal = map(sal, paisa  => paisa+=1)
// console.log(newSal)
// assertArraysEqual(newSal, [2,3,4])

// let animals = [{type: "Dog", namee: "Oguwa"},
// {type: "Cat", namee: "Chew"}
// ]

// let newAnimal = map(animals, a => a.namee)
// console.log(newAnimal)
// assertArraysEqual(['Oguwa', 'Chew'], ['Oguwa', 'Chew'])

// module.exports = map;
