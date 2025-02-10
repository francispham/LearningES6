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
    this.tail = newNode; //  Setting new Tails everytime New Nodes Added
    this.length++;
    return this;
  } // O(1)

  // Adding Values to The Beginning of the Linked List:
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  } // O(1)

  // Inserting Values to a specific Location inside Linked List:
  insert(index, value) {
    // Check Params:
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }

    // If index are other than these above:
    const newNode = new Node(value);

    //Define the Index of the Node before the inserted Location
    const leader = this.traverseToIndex(index - 1); //See the Last Method below:
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  } // O(n)

  remove(index) {
    // Check Params:
    if (index >= this.length) {
      console.log("Index Not Exist");
      return this;
    }
    if (index === 0) {
      const currentNode = this.head;
      // console.log('CurrentNode: ', currentNode);

      // Removing First Node:
      this.head.value = currentNode.next.value;
      this.head.next = currentNode.next.next;
      this.length--;
      return this;
    }

    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;

    // Removing Node at a specific Index:
    leader.next = unwantedNode.next;
    this.length--;
    return this;
  } // O(n)

  // HELPER METHODS:
  // Convert Linked Lists into Arrays:
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

  // Traverse Method:
  traverseToIndex(index) {
    // Check Params:
    let counter = 0;
    let currentNode = this.head;
    // Traversing
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.append(17);
// console.log('Array: ', myLinkedList.printList());

myLinkedList.insert(2, 170);
// console.log('Array After Insert 170: ', myLinkedList.printList());
myLinkedList.insert(99, 180);
// console.log('Array After Insert 180: ', myLinkedList.printList());
myLinkedList.insert(0, 190);
console.log("Insert 190: ", myLinkedList.printList());

// console.log('Linked List Before Removing Value at Index 3: ', myLinkedList);

myLinkedList.remove(3);
console.log("Removing Value at Index 3: ", myLinkedList.printList());

myLinkedList.remove(0);
console.log("Removing the First Node: ", myLinkedList.printList());

myLinkedList.remove(6);
console.log("Removing nonIndexed Value: ", myLinkedList.printList());

console.log("Linked List: ", myLinkedList);
