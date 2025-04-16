/* DYNAMIC PROGRAMMING:
  + It is an optimization technique used to solve problems using cache.
  + It is used to solve problems that can be broken down into a collection of subproblem. Storing each of
    the subproblems just once, and storing their solutions in case next time the same subproblem occurs.

  => Divide and Conquer + Memoization

  + Rule:
    1. Can be broken down into smaller subproblems
    2. Recursive Solution
    3. Are there repetitive subproblems?
    4. Memoize subproblems
 */

/* Memoization - Caching Technique: */

function addTo80(n) {
  return n + 80;
}
addTo80(5);

/* Global Scope 'cache': 

let cache = {};

function memoizeAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log('long time');
    const answer = n + 80;
    cache[n] = answer;
    return answer;
  }
}
*/

// console.log(1, memoizeAddTo80(6))
// console.log(cache)
// console.log('-----------')
// console.log(2, memoizeAddTo80(6))

/* Memoization with JS Closure: */
function memoizeAddTo80() {
  let cache = {};

  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("long time");
      const answer = n + 80;
      cache[n] = answer;
      return answer;
    }
  };
}

const memoized = memoizeAddTo80();

console.log(1, memoized(6));
// console.log(cache)
// console.log('-----------')
console.log(2, memoized(6));

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
let calculations = 0;
function fibonacci(n) {
  //O(2^n)

  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciTopDown() {
  //O(n)
  let cache = {};
  return function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

function fibonacciBottomUp(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}

const fasterFib = fibonacciTopDown();

console.log("Slow", fibonacci(35));
console.log("DP", fasterFib(100));
console.log("DP2", fibonacciBottomUp(100));
console.log("we did " + calculations + " calculations");

/* Dynamic Programming Interview Question: https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12409090#notes */
