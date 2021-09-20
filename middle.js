const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;