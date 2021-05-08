const sortedArray = [1, 2, 4, 5, 6, 7, 8, 10, 12];
const randomArray = [1, 22, 4, 5, 46, 17, 8, 0, 12];
const sortedNegativeNumbersArray = [-9, -5, -4, -1, 3, 5, 6, 7, 8, 10];
const sortedDuplicatedNumbersArray = [0, 4, 6, 9, 9, 9, 11, 18, 21, 51, 88];


/* I. Two Pointer Technique */
/*  1. Find Two Numbers in a Sorted Array that sum to a Target:  */ 
function twoSum(array, target) {
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer < rightPointer) {
    let currentSum = array[leftPointer] + array[rightPointer];
    if (currentSum < target) {
      leftPointer++;
    } else if (currentSum > target) {
      rightPointer--;
    } else {
      return [leftPointer, rightPointer];
    }
  }
  return [-1, -1];
};
// console.log(twoSum(sortedArray, 10));

/*  2. Find three Numbers in a Sorted Array that sum to a Target: */ 
function threeSum(array, target) {
  for (let leftPointer = 0; leftPointer < array.length; leftPointer++) {
    let midPointer = leftPointer + 1;
    let rightPointer = array.length - 1;

    while (midPointer < rightPointer) {
      let currentSum = array[leftPointer] + array[midPointer] + array[rightPointer];
      if (currentSum < target) {
        midPointer++;
      } else if (currentSum > target) {
        rightPointer--;
      } else {
        return [leftPointer, midPointer, rightPointer];
      }
    }
  }
  return [-1, -1, -1];
};
// console.log(threeSum(sortedArray, 29));

/*  3. Square each Value in a Sorted Array and return the Output in Sorted Order:  */ 
function sortedSquaredArray(array) {
  let rightPointer = 0;
  while (rightPointer < array.length && array[rightPointer] < 0) {
    rightPointer++
  }
  let leftPointer = rightPointer - 1;
  let result = [];
  
  while (leftPointer >= 0 && rightPointer < array.length) {
    if (array[leftPointer] ** 2 < array[rightPointer] ** 2) {
      result.push(array[leftPointer]*array[leftPointer]);
      leftPointer--;
    } else {
      result.push(array[rightPointer]*array[rightPointer]);
      rightPointer++;
    }
  };

  while (leftPointer >= 0) {
    result.push(array[leftPointer]*array[leftPointer]);
    leftPointer--;
  };

  while (rightPointer < array.length) {
    result.push(array[rightPointer]*array[rightPointer]);
    rightPointer++;
  }
  return result;
};
// console.log(sortedSquaredArray(sortedNegativeNumbersArray));