// let usr = require('./user.js');
require('./user'); // можно неуказывать расширение

const john = new User("John");
const bill = new User("Bill");

bill.hello(john);
