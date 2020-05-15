                  /*  Big O: https://www.bigocheatsheet.com/ */

/* 
Static Array Operations: 
  LOOKUP:   O(1)
  PUSH:     O(1)
  INSERT:   O(n)
  DELETE:   O(n)

Dynamic Array Operations (eg. You can find in C++):
  LOOKUP:   O(1)
  APPEND:   O(1)  can be O(n) ***
  INSERT:   O(n)
  DELETE:   O(n)

  SPACE: O(n)
*/
const strings = ['a', 'b', 'c', 'd'];      // 4*4 = 16 Bytes of Storage

// push
strings.push('e');                  // O(1);

// pop
strings.pop();                      //O(1)

// unshift
strings.unshift('x');               // O(n)

// splice
strings.splice(2, 0, 'alien');      // O(n)

console.log('String: ', strings);

/*
Hash Tables Operation:
  LOOKUP:   O(1)  Incase of Hash Collusion, LOOKUP becomes TRAVERSE:   O(N)
  SEARCH:   O(1)
  INSERT:   O(1)
  DELETE:   O(1)

  SPACE:    O(n)

=> Hash Table are used to solve Nested Looping.
*/ 
let user = {
  age: 31,
  name: 'Francis',
  magic: true,
  scream: function() {
    console.log('Hello MEO!');
  }
};

user.age;                          // O(1)
user.spell = 'Umbala';             // O(1)
user.scream();                     // O(1)

// Hash Collision:                 // O(n)