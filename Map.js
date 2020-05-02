import { animals } from './index.js';

// Introduced Map Method:
let mapNames = animals.map(function (animal) {
  return animal.name + " is a " + animal.species;
});
console.log(mapNames);
console.log("---");

// ES6 Map Method:
let mapNamesES6 = animals.map(animal => animal.name + " is a " + animal.species);
console.log('ES6 Map Method: ', mapNamesES6);
console.log("---");

// With For Loop:
let flName = [];
for (let i = 0; i < animals.length; i++) {
  flName.push(animals[i].name + " is a " + animals[i].species);
}

console.log(flName);
