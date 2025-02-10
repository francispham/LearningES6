/* jshint proto: true */
// Object:
var person = {
  firstname: "Francis",
  lastname: "Pham",
  greet: function () {
    console.log("Hello, " + this.firstname + " " + this.lastname);
  },
};

person.greet();

console.log(person[["firstname"]]);

// Function Contructors:
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Person.prototype.greet = function () {
  console.log("Hello (from FnCons), " + this.firstname + " " + this.lastname);
};

var francis = new Person("Francis", "Pham");
francis.greet();

var phong = new Person("Phong", "Pham");
phong.greet();

console.log(francis.__proto__);
console.log(phong.__proto__);
console.log(phong.__proto__ === francis.__proto__);
