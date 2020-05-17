/* 
1 --> 10 --> 5 --> 16 --> 17

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

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  // Adding Values to The End of the Linked List:
  append(value) {
    // Creating new Nodes:
    const newNode = new Node(value);
    this.tail.next = newNode; // Adding New Nodes to the next Index
    this.tail = newNode;  //  Setting new Tails everytime New Nodes Added
    this.length++;
    return this;
  }

    // Adding Values to The Beginning of the Linked List:
  prepend(value) {
    const newNode = new Node(value);
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
myLinkedList.append(17);

console.log(myLinkedList);