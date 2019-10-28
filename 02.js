let usr = require('./user.js');

const john = new usr.User("John");
const bill = new usr.User("Bill");

bill.hello(john);
