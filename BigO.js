/*  Big O: https://www.bigocheatsheet.com/ */

/* 
ARRAYS:
  + Static Array Operations: 
    LOOKUP:   O(1)
    PUSH:     O(1)
    INSERT:   O(n)
    DELETE:   O(n)

  + Dynamic Array Operations (eg. You can find in C++):
    LOOKUP:   O(1)
    APPEND:   O(1)  can be O(n) ***
    INSERT:   O(n)
    DELETE:   O(n)

  SPACE: O(n)
*/
const strings = ["a", "b", "c", "d"]; // 4*4 = 16 Bytes of Storage

// push
strings.push("e"); // O(1);

// pop
strings.pop(); //O(1)

// unshift
strings.unshift("x"); // O(n)

// splice
strings.splice(2, 0, "alien"); // O(n)

console.log("String: ", strings);

/*
HASH TABLES Operation:
  LOOKUP:   O(1)  Incase of Hash Collusion, LOOKUP becomes TRAVERSE:   O(N)
  SEARCH:   O(1)
  INSERT:   O(1)
  DELETE:   O(1)

  SPACE:    O(n)

=> Hash Table are used to solve Nested Looping.
*/
let user = {
  age: 31,
  name: "Francis",
  magic: true,
  scream: function () {
    console.log("Hello MEO!");
  },
};

user.age; // O(1)
user.spell = "Umbala"; // O(1)
user.scream(); // O(1)

// Hash Collision:                 // O(n)

/*
LINKED LISTS:
  + Single Linked List Operations:
    PREPEND:   O(1)
    APPEND:    O(1)
    LOOKUP:    O(n)
    INSERT:    O(n)
    DELETE:    O(n)
    
  + Doubly Linked List Operations:
    PREPEND:   O(1)
    APPEND:    O(1)
    LOOKUP:    O(n) => Faster than Single Linked List. O(n/2) -> O(n)
    INSERT:    O(n)
    DELETE:    O(n)
*/
const obj1 = { a: true };
const obj2 = obj1; //  Obj2 is a Pointer because it prefer to Obj1.
obj1.a = "booya"; //  And both point to the same Location in Memory.

console.log("Obj1: ", obj1);
console.log("Obj2: ", obj2);

/*
STACKS Operations:
  LOOKUP:    O(n)
  POP:       O(1)
  PUSH:      O(1)
  PEEK:      O(1)

LIFO
*/

/*
QUEUES Operations:
  LOOKUP:    O(n)
  ENQUEUE:   O(1)
  DEQUEUE:   O(1)
  PEEK:      O(1)

FIFO
*/

/*
TREES:
  + Binary Search Tree Operations:
    LOOKUP:    O(log N)
    INSERT:    O(log N)
    DELETE:    O(log N)

  + Binary Heap Tree Operations:
    LOOKUP:    O(n)
    INSERT:    O(log N)
    DELETE:    O(log N)

  + Trie Tree Operations (Used in TEXT Searching):
    O(Length of the Word)
*/
