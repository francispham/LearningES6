/*
Question1: 
Recurring Items inside an Array:
  Given an Array = [2, 5, 1, 2, 3, 5, 1, 2, 4], It should Return 2.

  Given an Array = [2, 1, 1, 2, 3, 5, 1, 2, 4], It should Return 1.

  Given an Array = [2, 3, 4, 5], It should return Undefined!
*/ 
function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      // Important Trick: j = i + 1 will ensures over Looping:
      // console.log('i ', input[i], input[j] , ' j');

      if (input[i] === input[j]) {
        return input[i];
      };
    };
  };
  return undefined;
};  // O(n^2) Time Complexity     &&    O(1) Space Complexity

// Enhanced Solution in Time Complexity By Using Hash Table:
function firstRecurringCharacterHT(input) {
  let map = {}; // O(n) in Space Complexity
  for (let i = 0; i < input.length; i++) {
    // console.log(map[input[i]]);
    // console.log(input[i]);

    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    // console.log(map);
  }
  return undefined;
};  // O(n) Time Complexity     &&    O(n) Space Complexity

// console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log('Q1: ', firstRecurringCharacterHT([2, 5, 1, 2, 3, 5, 1, 2, 4]));


/*
Question 2: 
Given 2 Arrays, create a Function that let's a User know (true/false)
whether these two Arrays contain any Common Items.
For Example:
  const array1 = ['a', 'b', 'c', 'x'];
  const array2 = ['z', 'y', 'i', 'k'];
  Should Return false.
  --------------------
  const array1 = ['a', 'b', 'c', 'x'];
  const array2 = ['z', 'y', 'x'];
  Should Return true.

2 Parameters - Arrays - No Size Limit
Return true or false
*/
function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      };
    };
  };
  return false;
};  //O(a * b) Time Complexity     &&    O(1) Space Complexity


// Enhanced Solution in Time Complexity By Using Hash Table:
function containsCommonItemHT(arr1, arr2) {
  // Loop through the First Array & Create an Object where 
  // Properties (keys) === Items in the Array! (which values are all 'true')
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if(!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    };
  };
  // console.log(map);

  // Loop through the Second Array & Check if the Item in 
  // Second Array exists on the Created Object!
  for (let j = 0; j < arr2.length; j++) {
    if(map[arr2[j]]) {
      return true;
    }
  }
  return false;
};  //  O(a + b) Time Complexity     &&    O(a) Space Complexity


// ES6 Enhanced Solution with some & include Methods:
function containsCommonItemES6(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
};  //  Time & Space Complexities?

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i', 'k'];
// const array2 = ['z', 'y', 'i', 'x'];

console.log('Q2: ', containsCommonItemES6(array1, array2));


/*
Question 3:
Given an Array of Numbers and a Number, Check if Sum of 2 Items 
in the Array equal to that Number. 
*/ 
function hasPairWithSum(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      };
    };
  };
};  //O(n) Time Complexity     &&    O(1) Space Complexity

// Enhanced Solution in Time Complexity By Using Hash Table with has & add Methods:
function hasPairWithSumHT(arr, sum) {
  // Create a Hash Table with Set():
  const mySet = new Set();  
  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) {
      return true;
    };
    mySet.add(sum - arr[i]);
  };
  return false;
};  //O(n) Time Complexity     &&    O(n) Space Complexity

console.log('Q3: ', hasPairWithSumHT([6, 4, 3, 2, 1, 7], 9))