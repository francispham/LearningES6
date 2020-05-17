/* 
1 --> 10 --> 5 --> 16

let myLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null
      }
    }
  }
};
*/

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  // Adding Values to The End of the Linked List:
  append(value) {
    // Creating new Nodes:
    const newNode = {
      value: value,
      next: null
    };
    this.tail.next = newNode; // Adding New Nodes to the next Index
    this.tail = newNode;  //  Setting new Tails everytime New Nodes Added
    this.length++;
    return this;
  }

    // Adding Values to The Beginning of the Linked List:
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
};

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);

console.log(myLinkedList);