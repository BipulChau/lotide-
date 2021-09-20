const tail = require('../tail');
const assertEqual = require('../assertEqual');


let names = ["Bipul", "Madhu", "Nanu", "Bunu", "Oguwa"];
let newName = tail(names);

// console.log(names);
//console.log(newName);

assertEqual(tail(names).length, newName.length);