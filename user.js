const phrases = require('./ru') // ищет JS, не находит и подключает JSON

function User(name) {
  this.name = name
}

User.prototype.hello = function(who) {
  console.log(phrases.Hello + ", " + who.name)
}

console.log("user.js included")

// exports.User = User
global.User = User
