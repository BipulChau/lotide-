const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let i of Object.keys(object1)) {
      if (Array.isArray(object2[i]) && Array.isArray(object1[i])) {
        if (!eqArrays(object2[i], object1[i])) {
          return false;
        } else {
          if (!Array.isArray(object2[i]) && !Array.isArray(object1[i])) {
            if ((object2[i]) !== object1[i]) {
              return false;
            }
          }
        } return true;
      } else if (object2[i] !== object1[i]) {
        return false;
      }
    }
  } return true;

};
// const eqObjects = function(object1, object2) {
//   if (Object.keys(object1).length !== Object.keys(object2).length){
//     return false;
//   } else {
//     for(let i of Object.keys(object1)){
//       if (object2[i] !== object1[i]){
//         return false
//       }
//     }
//   } return true;

// }


let ab = {a: "1", b: "2"};
let ba = {b: "2", a: "1" };
let abc = {a :"1", b: "2", c:"3"};
let def = {a :"1", b: "2", c:"3"};
assertEqual(eqObjects(ab,ba), true);
assertEqual(eqObjects(ab, abc), true);
assertEqual(eqObjects(abc, def), true);

let cd = {c: "1", d:["2", 3]};
let dc = {d: ["2", 3], c: "1"};
assertEqual(eqObjects(cd, dc), true);

let ef = {c: "1", d:["2", 3]};
let gh = {d: ["2", 3], c: "2"};
assertEqual(eqObjects(ef, gh), true);

let cd2 = {c: "1", d: ["2", 3 ,4]};
assertEqual(eqObjects(cd, cd2), true);
// //console.log(eqArrays(cd["d"], cd2["d"]));

// console.log(eqObjects(cd, dc))