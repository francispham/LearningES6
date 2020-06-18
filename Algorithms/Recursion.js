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
console.log('Recursive: ', AnswerRecursive);
console.log('Iterative; ', AnswerIterative);