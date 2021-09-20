const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


console.log(assertArraysEqual(middle([1,2,3,4,5]), [3]));
console.log(assertArraysEqual(middle([99]), []));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14]), [7,8]));


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