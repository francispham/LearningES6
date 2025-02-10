import _ from "lodash";

// Normal Function:
let dragon = (name, size, element) =>
  name + " is a " + size + " dragon that breathes " + element + "!";

console.log("Normal: ", dragon("fluffykins", "tiny", "lightning"));
console.log("--------");
console.log("--------");

/* Currying Function: */
let curryingDragon = (name) => (size) => (element) =>
  name + " is a " + size + " dragon that breathes " + element + "!";

// Return Chain of Functions:
console.log("Currying: ", curryingDragon("fluffykins")("tiny")("lightning"));
console.log("---");

// Missing Return from The Last Function:
console.log(
  "Currying & Missing Return From The Last Function: ",
  curryingDragon("fluffykins")("tiny")
);
console.log("---");

//  Return from Separate Functions:
let fluffykinsDragon = curryingDragon("fluffykins");
let tinyDragon = fluffykinsDragon("tiny");

console.log("Return from Separate Functions :", tinyDragon("lighting"));
console.log("--------");
console.log("--------");

/* Making Currying Functions with Lodash: */
dragon = _.curry(dragon);
console.log(
  "Making Currying Functions with Lodash: ",
  dragon("fluffykins")("tiny")("lightning")
);
console.log("---");
