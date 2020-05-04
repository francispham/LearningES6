# Learning JavaScript

## Functional Programming

### Notes

1. Functions are Values => First Class Function Programming
2. Less Codes Always means Less Bugs
3. Good Functional Code is made up of small Functions that do one thing and are chained/bind together
4. In JavaScript, Functions are also Closures. The Function Body has ACCESS to Variables that are Outside of It
5. Functions that take other Functions as their Arguments are called Higher Order Functions
6. HOF Filter is a Method on the Array Object that takes another Function as its Arguments and uses that Function to Filter the Array
7. HOF Map will take an Array and return a new Array of the same length but with each individual Item Transformed

8. HOF Reduce is extremely powerful List Transformation that it can replace all of the HOFs including Filter, Map, Reject, Find...
9. Reduce Method will take a Callback Function and an Object (as a Starting Point) as its' Arguments
10. Currying is when a Function doesn't take all of its Arguments upfront. A Curry Function has to call all the Arguments of its' Partial Functions. Eg:

```javascript
function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c;
        };
    };
};

// ES6:
const multiplyES6 = a => b => c => a * b * c;

console.log(multiply(1)(2)(3)); // 6
console.log(multiplyES6(1)(2)(3)); // 6
```

11. Recursion is when a Function calls itself until it doesn't

### Coding Tips

1. Always think about what you are doing, what your END GOALS are.
2. Do not start Coding too early, think about the process & result.

3. 