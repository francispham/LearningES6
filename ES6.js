/* Arrow Function: */
const boxes = [1,2,3,4,5,6]
// ES5
function compressAllBoxes(boxes) {
    boxes.forEach(function(box) {
        console.log(box);
    });
}
// ES6
const ES6compressAllBoxes = boxes => {
    boxes.forEach(box => console.log(box));
}

compressAllBoxes(boxes)
ES6compressAllBoxes(boxes)

/* Template Literal: */
// ES5
function myFunc(name, age) {
    return 'Hello ' + name + ', your age is ' + age + 'year old!'
}

// ES6
const ES6myFunc1 = (name, age) => {
    return `Hi ${name}, your age is ${age} year old!`;
}

const ES6myFunc2 = name => `Hello ${name}`;

console.log(myFunc('Francis', '30'));
console.log(ES6myFunc1('Francis'));
console.log(ES6myFunc2('Francis'));

/* Default Parameters: */
const DP = (name, age=22) => {
    return `Hi ${name}, your age is ${age} year old!`;
}
console.log(DP('Francis'))

/* Array and Object Destructing: */
/* Import & Export: */
/* Rest Parameter a& Spread Operator: */
/* Classes: */
/* Promises: */
const myPromise = new Promise((resolve, reject) => {
    if (Math.random() * 100 <= 50) {
        resolve('Hello, Promises!');
    }
    reject(new Error('In 50% of the cases, I fail. Miserably.'));
});

// Using Promises:
const onResolved = resolvedValue => console.log(resolvedValue);
const onRejected = error => console.log(error);

myPromise.then(onResolved, onRejected);
/*
// Same as above, written concisely
myPromise.then((resolvedValue) => {
    console.log(resolvedValue);
}, (error) => {
    console.log(error);
});
*/

/* Async/Await: */

