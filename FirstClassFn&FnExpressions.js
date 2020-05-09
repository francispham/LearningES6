// Function statement
function greet() {
  console.log("hi");
}
greet();

// Functions are First-class
function logGreeting(fn) {
  fn();
}
logGreeting(greet);

// Function Expression
var greetMe = function() {
  console.log('Hi Francis');
};
greetMe();

// It's First-class
logGreeting(greetMe);

// Use a function expression on the fly
logGreeting(function() {
  console.log('Hello Francis!');
});


// Immediately Invoked Function Expression:
var firstname = "Francis";

(function (lastname) {
  var firstname = "Phong";
  console.log(firstname);
  console.log(lastname);
}('Pham'));

console.log(firstname);

