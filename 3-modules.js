// CommonJS, every file is module ( by default)
// Modules - Encapsulated Code ( only share minimum)
const name = require('./4-firstModule');
const sayHi = require('./5-secondModule')
// console.log(name);
// console.log(sayHi);

const data = require('./6-alternative export')
require('./7-mindGrenade')
// sayHi('susan');
// sayHi(name.john);
// sayHi(name.peter);