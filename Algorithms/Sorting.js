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