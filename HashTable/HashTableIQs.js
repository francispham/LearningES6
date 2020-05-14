/*
Google Question:
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
};  // O(n^2) Time Complexity &&  O(1) Space Complexity

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
    console.log(map);
  }
  return undefined;
};  // O(n) Time Complexity

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacterHT([2, 5, 1, 2, 3, 5, 1, 2, 4]));