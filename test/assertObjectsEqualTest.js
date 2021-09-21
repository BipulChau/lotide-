const {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  without,
} = require('../index'); 

let ab = {a: "1", b: "2"};
let ba = {b: "2", a: "1" };
assertObjectsEqual(ab, ba);

let cd = {c: "1", d:["2", 3]};
let dc = {d: ["2", 3], c: "1"};
assertObjectsEqual(cd, dc);

let cd2 = {c: "1", d: ["2", 3 ,4]};
assertObjectsEqual(cd, cd2);