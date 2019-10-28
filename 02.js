function User(name) {
  this.name = name;
}

User.prototype.hello = function(who) {
  console.log("Hello, " + who.name);
};

const john = new User("John");
const bill = new User("Bill");

bill.hello(john);
