import _ from 'lodash';

let dragons = [
  { name: 'fluffykins', element: 'lightning' },
  { name: 'noomi', element: 'lightning' },
  { name: 'karo', element: 'fire' },
  { name: 'doomer', element: 'timeWarp' },
];

/* Normal Implementation with Filter: */
let hasElement = (element, obj) => obj.element === element;
let lightningDragons = dragons.filter(item => hasElement('lightning', item));

console.log('Normal Lightning Dragons: ', lightningDragons);
console.log("--------");


/* Advance Currying Implementation with Filter with Lodash: */
let hasElementLAC = _.curry(hasElement);
let lightningDragonsLAC = dragons.filter(hasElementLAC('lightning'));

console.log(
  "Advance Currying Lightning Dragons with Lodash:",
  lightningDragonsLAC
);
console.log("--------");

/* Advance ES6 Currying Implementation with Filter without Lodash: */
let hasElementCurrying = element => obj => obj.element === element;
let lightningDragonsAC = dragons.filter(hasElementCurrying('lightning'));

console.log(
  "Advance ES6 Currying Lightning Dragons without Lodash: ",
  lightningDragonsAC
);