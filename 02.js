// let usr = require('./user.js');
require('./User'); // можно неуказывать расширение

const john = new User("John");
const bill = new User("Bill");

bill.hello(john);
