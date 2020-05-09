import { animals } from "../index.js";

/* Higher Order Function Vs For Loop: */
// HOF Filter: (Less Codes)
let dogs = animals.filter(function(animal) {
  return animal.species === 'dog';
});
// ES6 Filter:
let dogsES6 = animals.filter(animal => animal.species === 'dog');

console.log('HOF with Dogs: ', dogs);
console.log("HOF with Dogs in ES6: ", dogsES6);
console.log("---");

// For Loop:
let rabbits = [];
for (let i = 0; i< animals.length; i++) {
  if(animals[i].species === 'rabbit') {
    rabbits.push(animals[i]);
  };
}

console.log('For Loop with Rabbits: ', rabbits);
console.log("---");

/* Separating a Callback in Higher Order Function can also create other possibilities 
with isDog Function: */
let isCat = function(animals) {
  return animals.species === 'cat';
};
let cats = animals.filter(isCat);
console.log("Introduced High Order Function with Filter Cats from Animals:", cats);
