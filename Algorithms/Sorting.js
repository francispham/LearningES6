const { merge } = require("lodash");

/* JS Methods */ 
const letters = ['a', 'd', 'c', 'e', 'r', 'b'];
const  basket = [2, 54, 66, 33, 1, 3, 55, 5, 6, 7];

letters.sort();
// Sort Method will translate Number to Unicode before Sorting:
basket.sort();
'33'.charCodeAt(0);
// To Sort basket Array:
basket.sort(function (a, b) {
  return a - b;
})
// The Time & Space Complexity of the Sort Method cannot be guaranteed as it is implementation dependent.


/* Bubble Sort: */
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if(array[j] > array[j+1]) {
        // Swap Numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j+1] = temp;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);


/* Selection Sort: */
function selection(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    // Set the Current Index as the Smallest Number
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        // Update Selected Number if Current is Lower than the Previous One
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

selection(numbers);


/* Insertion Sort: */ 
function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      // Move the Number to the First Position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // Find where this Number should go:
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // Move the number to the Right Spot
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);

/* Merge Sort: O(n log(n)) */
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  };
  // Split Array into Right & Left
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  console.log('left:', left);
  console.log('right:', right);

  return merge(
    mergeSort(left),
    mergeSort(right)
  );
};

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  console.log(left, right);
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const answer = mergeSort(numbers);
console.log('answer:', answer);