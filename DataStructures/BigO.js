/*  Big O: https://www.bigocheatsheet.com/ */

/* ARRAYS:
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
strings.pop(); // O(1)

// unshift
strings.unshift("x"); // O(n)

// splice (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
strings.splice(2, 0, "alien"); // O(n)

console.log("String: ", strings);

/* HASH TABLES Operation:
  LOOKUP:   O(1)  Incase of Hash Collusion, LOOKUP becomes TRAVERSE:   O(N)
  SEARCH:   O(1)
  INSERT:   O(1)
  DELETE:   O(1)

  SPACE:    O(n)

=> Hash Table are used to solve Nested Looping. Fast Access but More Memory Used.
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

// Map Object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
const map = new Map();

// Set Object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
const set = new Set();

// Hash Collision: when key & value are stored in the same bucket. LOOKUP => O(n)

/* LINKED LISTS:
  + Single Linked List Operations:
    PREPEND:   O(1)
    APPEND:    O(1)
    LOOKUP:    O(n)
    INSERT:    O(n)
    DELETE:    O(n)
    
  + Doubly Linked List Operations: (Allow to traverse backward because it contains an additional pointer to the previous node)
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

/* STACKS Operations:
  LOOKUP:    O(n)
  POP:       O(1)
  PUSH:      O(1)
  PEEK:      O(1)

LIFO
Created from Array or Linked List
*/

/* QUEUES Operations:
  LOOKUP:    O(n)
  ENQUEUE:   O(1)
  DEQUEUE:   O(1)
  PEEK:      O(1)

FIFO
Created from Linked List only
*/

/* TREES:
  + Binary Search Tree Operations:
    - Balanced Tree:
      LOOKUP:    O(log n)
      INSERT:    O(log n)
      DELETE:    O(log n)

    - Unbalanced Tree (Become a Linked List):
      LOOKUP:    O(n)
      INSERT:    O(n)
      DELETE:    O(n)

  + Binary Heap Tree Operations (Left and Right node are not sorted just need to be smaller than the parent node):
    LOOKUP:    O(n)
    INSERT:    O(log n)
    DELETE:    O(log n)
  => Used for Priority Queue (Elements with higher priority are processed first)

  + Trie Tree Operations (Used in TEXT Searching): O(Length of the Word)

  + AVL Tree & Red-Black Tree Operations (Self-Balanced Binary Search Tree: https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12368622#notes):
    LOOKUP:    O(log n)
    INSERT:    O(log n)
    DELETE:    O(log n)
*/

/* GRAPHS:
  + Directed vs Undirected Graphs
  + Weighted (has path distance)  vs Unweighted Graphs (no path distance)
  + Cyclic (Has a Loop) vs Acyclic Graphs (Has no Loop)
  + Graph Traversal Algorithms:
    - Depth First Search (DFS): O(V + E)
    - Breadth First Search (BFS): O(V + E)
*/

// Edge List
const ELGraph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// Adjacent List
const ALGraph = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent Matrix
const AMGraph = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];

/* Data Structures Map: https://coggle.it/diagram/W5E5tqYlrXvFJPsq/t/master-the-interview-click-here-for-course-link */
