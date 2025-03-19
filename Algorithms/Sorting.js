/* JS Methods O(n log(n))*/
const letters = ["a", "d", "c", "e", "r", "b"];
const basket = [2, 54, 66, 33, 1, 3, 55, 5, 6, 7];

console.log("Letters: ", letters.sort());

// Sort Method will translate Number to Unicode before Sorting:
console.log("Incorrect Basket: ", basket.sort());

"33".charCodeAt(0);
// To Sort basket Array:
console.log(
  "Correct Basket: ",
  basket.sort(function (a, b) {
    return a - b;
  })
);

// The Time & Space Complexity of the Sort Method cannot be guaranteed as it is implementation dependent.

/* Bubble Sort O(n^2) */
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap Numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
// console.log("Bubble Sort:", bubbleSort(numbers));

/* Selection Sort O(n^2) */
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
// console.log("Selection Sort:", selection(numbers));

/* Insertion Sort O(n) -> O(n^2) */
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
  return array;
}
// console.log("Insertion Sort:", insertionSort(numbers));

/* Merge Sort: O(n log(n)) */
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array into Right & Left
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  // console.log("left:", left);
  // console.log("right:", right);

  return merge(mergeSort(left), mergeSort(right));
}

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
  // console.log(left, right);
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// console.log("Merge Sort:", mergeSort(numbers));

/* Quick Sort: O(n log(n)) */
function quickSort(array, left, right) {
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    // Sort Left & Right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

// Select First & Last Index as 2nd & 3rd Parameters:
console.log("Quick Sort:", quickSort(numbers, 0, numbers.length - 1));
