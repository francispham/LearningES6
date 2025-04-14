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

console.log("Reverse 1: ", reverse("Hi My name is Francis"));
console.log("Reverse 2: ", reverse2("Hi My name is Francis"));
console.log("Reverse ES6: ", reverseES6("Hi My name is Francis"));

console.log("Reverse ES6 Plus: ", reverseES6Plus("Hi My name is Francis"));
console.log("------------------");

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

console.log(mergeSortedArray([0, 3, 4], [1, 4, 6, 20]));

/* 3. Two Sum */
/* 4. Maximum Subarray */
/* 5. Move Zeroes */
/* 6. Contains Duplicate */
/* 7. Rotate Array */
/* 8. Longest Word */
