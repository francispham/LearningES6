// Immediately Invoked Function Expression:
var firstname = "Francis";

(function(lastname) {
  var firstname = "Phong";
  console.log(firstname);
  console.log(lastname);
}('Pham'));

console.log(firstname);