/* Rules: 
1. Identify the Base Case ( A Conditional Statement )
2. Identify the Recursive Case
3. Get closer and closer and 'return' when needed
=> Usually 2 'return' keywords are needed 
*/ 

let counter = 0;
function inception() {
  if (counter > 3) {
    return 'done!';
  };
  counter++;
  // inception(); => without return keyword, this function will return Undefined
  return inception();
};

inception();


/*
Interview Question:
Write 2 Functions that finds the Factorial of any Number. One should use Recursive,
the other should just use a for Loop.
*/
function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  };

  return number * findFactorialRecursive(number - 1);
};

function findFactorialIterative(number) {
  let answer = 1;
  if (number === 2) {
    return 2;
  };
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }

  return answer;
};

let AnswerRecursive = findFactorialRecursive(5);
let AnswerIterative = findFactorialIterative(5);
console.log(
  'Recursive: ', AnswerRecursive,
  ' Vs Iterative; ', AnswerIterative
);


/*
Interview Question: 
Give a Number N return the Index of the Fibonacci sequence, where the Sequence is:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
The Pattern of the Sequence is that each Value is the Sum of the 2 Previous Values,
that means that for N = 5 => 2 + 3
*/

function fibonacciIterative(n) {                        //  O(N)
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  };
  return arr[n];
};
let FibonacciIterative = fibonacciIterative(8);         //  O(2^N)

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n-2);
};

let FibonacciRecursive = fibonacciRecursive(8);

console.log(
  'FibonacciR: ', FibonacciRecursive,
  ' Vs FibonacciI: ', FibonacciIterative
);

/*
Implement a function that reverses a string using iteration...and then recursion!
*/

function reverseString(str) {
  let arrayStr = str.split("");
  let reversedArray = [];
  //We are using closure here so that we don't add the above variables to the global scope.
  function addToArray(array) {
    if (array.length > 0) {
      reversedArray.push(array.pop());
      addToArray(array);
    }
    return;
  }
  addToArray(arrayStr);
  return reversedArray.join("");
}

const ReverseString = reverseString("yoyo master");

function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

const ReverseStringRecursive = reverseStringRecursive("yoyo master");

console.log("RS: ", ReverseString, " Vs RSR: ", ReverseStringRecursive);