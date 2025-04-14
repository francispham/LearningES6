/*
Question 1: Reverse a Linked List:
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

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  } // O(1)

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  } // O(1)

  printList() {
    const array = [];
    let currentNode = this.head;
    // while Loop is best used in this situation because we do not know how long is the List.
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  reverse() {
    if (!this.head.next) {
      return this;
    }
    let first = this.head; // first = 1
    let second = first.next; // second = 10
    this.tail = this.head; // head = 1 => ** Tail Node's Value: 1
    while (second) {
      const temp = second.next; //  temp Node= 5 => 16 => 17
      second.next = first; //  second.next Node= 1 => 10 => 5 => 16 => 17
      first = second; //  first Node= 10 => 5 => 16 => 17
      second = temp; //  second Node= 5 => 16 => 17
    }
    this.head.next = null; // => ** Tail points to null. Same as:
    // this.tail.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.append(17);

console.log("Append 17: ", myLinkedList.printList());

// console.log("Linked List: ", myLinkedList);
console.log("Reverse Linked List: ", myLinkedList.reverse());
console.log("Reverse: ", myLinkedList.printList());
