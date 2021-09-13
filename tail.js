const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let newArr = arr.slice(1);
  return newArr;
};

let names = ["Bipul", "Madhu", "Nanu", "Bunu", "Oguwa"];
let newName = tail(names);
console.log(names);
console.log(newName);

for (let i = 0; i < newName.length; i++) {
  assertEqual(newName[i], names[i + 1]);
}
