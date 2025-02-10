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
}
// console.log(twoSum(sortedArray, 10));

/*  2. Find three Numbers in a Sorted Array that sum to a Target: */
function threeSum(array, target) {
  for (let leftPointer = 0; leftPointer < array.length; leftPointer++) {
    let midPointer = leftPointer + 1;
    let rightPointer = array.length - 1;

    while (midPointer < rightPointer) {
      let currentSum =
        array[leftPointer] + array[midPointer] + array[rightPointer];
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
}
// console.log(threeSum(sortedArray, 29));

/*  3. Square each Value in a Sorted Array and return the Output in Sorted Order:  */
function sortedSquaredArray(array) {
  let rightPointer = 0;
  while (rightPointer < array.length && array[rightPointer] < 0) {
    rightPointer++;
  }
  let leftPointer = rightPointer - 1;
  let result = [];

  while (leftPointer >= 0 && rightPointer < array.length) {
    if (array[leftPointer] ** 2 < array[rightPointer] ** 2) {
      result.push(array[leftPointer] * array[leftPointer]);
      leftPointer--;
    } else {
      result.push(array[rightPointer] * array[rightPointer]);
      rightPointer++;
    }
  }

  while (leftPointer >= 0) {
    result.push(array[leftPointer] * array[leftPointer]);
    leftPointer--;
  }

  while (rightPointer < array.length) {
    result.push(array[rightPointer] * array[rightPointer]);
    rightPointer++;
  }
  return result;
}
// console.log(sortedSquaredArray(sortedNegativeNumbersArray));

/* II. Sliding Window Technique */
/*  1. Given an Array of Integers, return the Maximum Sum Subarray of Size k: */
function maxSumSubarray(array, k) {
  let maxSum = Number.MIN_VALUE;
  let startPoint = 0;
  let currentSum = 0;

  for (let endPoint = 0; endPoint < array.length; endPoint++) {
    currentSum += array[endPoint];
    if (endPoint - startPoint + 1 === k) {
      maxSum = Math.max(maxSum, currentSum);
      currentSum -= array[startPoint];
      startPoint++;
    }
  }
  return maxSum;
}
// console.log(maxSumSubarray(randomArray, 3));

/*  2. Given an Array of Positive Integers, return the Size of the Smallest Contiguous Subarray with a sum >= s: */
function smallestSize(array, s) {
  let minSize = Number.MAX_VALUE;
  let startPoint = 0;
  let currentSum = 0;

  for (let endPoint = 0; endPoint < array.length; endPoint++) {
    currentSum += array[endPoint];
    while (currentSum >= s) {
      minSize = Math.min(minSize, endPoint - startPoint + 1);
      currentSum -= array[startPoint];
      startPoint++;
    }
  }
  return minSize;
}
//console.log(smallestSize(randomArray, 60));

/* III. Binary Search */
/* 1. Find Index of a Number in a Sorted Array without Duplicated Numbers (Improve from O(n) => O(log(n))): */
function binarySearch(array, target) {
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer <= rightPointer) {
    let midPointer = Math.floor((leftPointer + rightPointer) / 2);

    if (array[midPointer] == target) {
      return midPointer;
    }
    if (array[midPointer] < target) {
      leftPointer = midPointer + 1;
    } else {
      rightPointer = midPointer - 1;
    }
  }
  return -1;
}
// console.log(binarySearch(sortedArray, 7));

// Find Index of a Number in a Sorted Array with Duplicated Numbers (Improve from O(n) => O(log(n))):
function binarySearchForDuplicates(array, target) {
  let left_index = -1;
  let right_index = -1;

  // Looking for Leftmost Index of the Target
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  while (leftPointer <= rightPointer) {
    let midPointer = Math.floor((leftPointer + rightPointer) / 2);
    if (array[midPointer] == target) {
      left_index = midPointer;
      rightPointer = midPointer - 1;
    } else if (array[midPointer] < target) {
      leftPointer = midPointer + 1;
    } else {
      rightPointer = midPointer - 1;
    }
  }

  // Looking for Rightmost index of the Target
  // leftPointer = 0;
  rightPointer = array.length - 1;
  while (leftPointer <= rightPointer) {
    let midPointer = Math.floor((leftPointer + rightPointer) / 2);
    if (array[midPointer] == target) {
      right_index = midPointer;
      leftPointer = midPointer + 1;
    } else if (array[midPointer] < target) {
      leftPointer = midPointer + 1;
    } else {
      rightPointer = midPointer - 1;
    }
  }

  return [left_index, right_index];
}
// console.log(binarySearchForDuplicates(sortedDuplicatedNumbersArray, 9));
// console.log(binarySearchForDuplicates(sortedDuplicatedNumbersArray, 19));

/* IV. Intervals */
const arrayOfIntervals = [
  [1, 3],
  [4, 6],
  [8, 10],
  [9, 18],
];
const newIntervalArray = [5, 9];

/*  1. Given an Array of Meetings represented by Arrays of length 2 with a Start Time and an End Time, 
return True if any of the Meetings overlap, and False if none of the Meetings overlap:  */
function overlappingMeetings(meetings) {
  meetings.sort();
  console.log("meetings.sort():", meetings.sort());
  for (let i = 1; i < meetings.length; i++) {
    let meetingA = meetings[i - 1];
    let meetingB = meetings[i];
    if (meetingA[1] > meetingB[0]) {
      return true;
    }
  }
  return false;
}
// console.log(overlappingMeetings(arrayOfIntervals));

/*  2. Given an Array of Intervals, merge any Overlapping Intervals and return the New Array: */
function merge(intervals) {
  intervals.sort();
  const mergedIntervals = [];
  for (const interval of intervals) {
    if (
      mergedIntervals.length == 0 ||
      mergedIntervals[mergedIntervals.length - 1][1] < interval[0]
    ) {
      mergedIntervals.push(interval);
    } else {
      mergedIntervals[mergedIntervals.length - 1][1] = Math.max(
        mergedIntervals[mergedIntervals.length - 1][1],
        interval[1]
      );
    }
  }
  return mergedIntervals;
}
// console.log(merge(arrayOfIntervals));

/*  3. Give a Sorted Array of non-overlapping intervals, insert a new Interval into the correct position, 
merge anything that overlap after the insertion, and return the new array:  */
function insert(intervals, newInterval) {
  const mergedIntervals = [];
  let i = 0;
  while (i < intervals.length && newInterval[0] > intervals[i][0]) {
    mergedIntervals.push(intervals[i]);
    i++;
  }

  if (
    mergedIntervals.length == 0 ||
    mergedIntervals[mergedIntervals.length - 1][1] < newInterval[0]
  ) {
    mergedIntervals.push(newInterval);
  } else {
    mergedIntervals[mergedIntervals.length - 1][1] = Math.max(
      mergedIntervals[mergedIntervals.length - 1][1],
      newInterval[1]
    );
  }

  while (i < intervals.length) {
    if (mergedIntervals[mergedIntervals.length - 1][1] < intervals[i][0]) {
      mergedIntervals.push(intervals[i]);
    } else {
      mergedIntervals[mergedIntervals.length - 1][1] = Math.max(
        mergedIntervals[mergedIntervals.length - 1][1],
        intervals[i][1]
      );
    }
    i++;
  }
  return mergedIntervals;
}
// console.log(insert(arrayOfIntervals, newIntervalArray));

/* V. String Patterns */
const randomString = "aaabccccdeeef";

/*  1. Given a String, return the Character that is least commonly used in the String.
  Ex: minChar('aabcccccccdd') === 'b';
      minChar('appllee 1233211111') === 'a';
*/
function findMinChar(string) {
  let len = string.length;

  for (let i = 0; i < len; i++) {
    if (
      string.indexOf(string.charAt(i)) === string.lastIndexOf(string.charAt(i))
    ) {
      return string.charAt(i);
    }
  }
  return "_";
}
// console.log(findMinChar(randomString));

/*  2. String to Object Technique: */
const charsObject = {};

for (let char of randomString) {
  /*  Basic: 
  if (!charsObject[char]) {
    charsObject[char] = 1;
  } else {
    charsObject[char]++;
  };
  */
  charsObject[char] = charsObject[char] + 1 || 1;
}
// console.log('charsObject:', charsObject);
/*  Given a String, return the Character that is most commonly used in the String.
    Ex: maxChar('abcccccccd') === 'c';
        maxChar('apple 12311111') === '1';
*/
function findMaxChar(string) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of string) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
// console.log(findMaxChar(randomString));

/*  Write a function that finds the zero-based index of the longest run in a string. 
A run is a consecutive sequence of the same character. If there is more than one run with the same length, 
return the index of the first one.
  Ex: IndexOfLongestRun("abbcccddddcccbba") should return 6 as 
  the longest run is dddd and it first appears on index 6.
*/
function IndexOfLongestRun(string) {
  let subArr = [0, 1];
  const array = [subArr];
  for (i = 0; i < string.length - 1; i++) {
    if (string[i] == string[i + 1]) {
      subArr[1]++;
    } else {
      subArr = [i + 1, 1];
      array.push(subArr);
    }
  }

  let numArr = [];
  array.forEach((item) => numArr.push(item[1]));
  const maxVal = Math.max(...numArr);
  return array.find((item) => item[1] == maxVal)[0];
}
// console.log(IndexOfLongestRun(randomString));
