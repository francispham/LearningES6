/*
1. Create a Function that Reverses a String:
'Hi My name is Francis' should be:
'sicanrF si eman yM iH'
*/
function reverse(str) {
  // Check Input:
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Hmm That is not Good";
  }

  // Operations:
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  // console.log(backwards);
  return backwards.join("");
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

const reverseES6 = (str) => str.split("").reverse().join("");

const reverseES6Plus = (str) => [...str].reverse().join("");

/* Test:
console.log("Reverse 1: ", reverse("Hi My name is Francis"));
console.log("Reverse 2: ", reverse2("Hi My name is Francis"));
console.log("Reverse ES6: ", reverseES6("Hi My name is Francis"));

console.log("Reverse ES6 Plus: ", reverseES6Plus("Hi My name is Francis"));
console.log("------------------");
*/

/*  2. Merge Sorted Arrays Question: */
function mergeSortedArray(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  // Check Input:
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}
// console.log(mergeSortedArray([0, 3, 4], [1, 4, 6, 20]));

/* 3. Two Sum */
//? Given an array of integers, return indices of the two numbers such that they add up to a specific target.
const array = [2, 7, 11, 15];
const target = 9;

// Brute Force:
function twoSum(arr, tar) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === tar) {
        return [i, j];
      }
    }
  }
}
// console.log(twoSum(array, target)); // Time - O(n^2) | Space - O(1)

// Optimized with Hash Map:
function twoSumOptimized(arr, tar) {
  const collection = {};
  for (let i = 0; i < arr.length; i++) {
    const difference = tar - arr[i];
    if (collection[difference] !== undefined) {
      return [collection[difference], i];
    }
    collection[arr[i]] = i;
  }
}
// console.log(twoSumOptimized(array, target)); // Time - O(n) | Space - O(n)

//? Find the maximum area of a container that can hold water.
const heightsArray = [7, 1, 2, 3, 9];

// Brute Force:
function maxArea(heights) {
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      const area = (j - i) * Math.min(heights[i], heights[j]);
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
}
// console.log(maxArea(heightsArray)); // Time - O(n^2) | Space - O(1)

// Optimized with Two Pointers Technique:
function maxAreaOptimized(heights) {
  let maxArea = 0;
  let left = 0;
  let right = heights.length - 1;
  while (left < right) {
    const area = (right - left) * Math.min(heights[left], heights[right]);
    maxArea = Math.max(maxArea, area);

    // Move the pointer pointing to the shorter line:
    // This is because the area is limited by the shorter line, so we want to find a potentially taller line.
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}
// console.log(maxAreaOptimized(heightsArray)); // Time - O(n) | Space - O(1)

//? Trapping Rain Water
function trappingRainWater(heights) {
  let maxArea = 0;
  for (let point = 0; point < heights.length; point++) {
    let leftPoint = point,
      rightPoint = point,
      maxLeft = 0,
      maxRight = 0;

    while (leftPoint >= 0) {
      maxLeft = Math.max(maxLeft, heights[leftPoint]);
      leftPoint--;
    }

    while (rightPoint < heights.length) {
      maxRight = Math.max(maxRight, heights[rightPoint]);
      rightPoint++;
    }
    const currentArea = Math.min(maxLeft, maxRight) - heights[point];
    if (currentArea > 0) {
      maxArea += currentArea;
    }
  }
  return maxArea;
}
// console.log(trappingRainWater(heightsArray)); // Time - O(n^2) | Space - O(1)

// Optimized with Two Pointers Technique:
function trappingRainWaterOptimized(heights) {
  let leftPointer = 0,
    rightPointer = heights.length - 1,
    maxLeft = 0,
    maxRight = 0,
    totalWater = 0;

  while (leftPointer < rightPointer) {
    // Identify the pointer with the lesser value.
    if (heights[leftPointer] <= heights[rightPointer]) {
      // Is this pointer value lesser than or equal to the max on that side?
      if (heights[leftPointer] >= maxLeft) {
        // Yes => update the max on that side.
        maxLeft = heights[leftPointer];
      } else {
        // No => get water height for the pointer value and add to total water.
        totalWater += maxLeft - heights[leftPointer];
      }
      // Move pointer in wards.
      leftPointer++;
    } else {
      // Repeat for the other pointer.
      if (heights[rightPointer] >= maxRight) {
        maxRight = heights[rightPointer];
      } else {
        totalWater += maxRight - heights[rightPointer];
      }
      rightPointer--;
    }
  }
  return totalWater;
}
// console.log(trappingRainWaterOptimized(heightsArray)); // Time - O(n) | Space - O(1)

/* 4. Maximum Subarray */
/* 5. Move Zeroes */
/* 6. Contains Duplicate */
/* 7. Rotate Array */
/* 8. Longest Word */
