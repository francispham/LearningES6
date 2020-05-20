class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  };
};

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  };

  // Adding Values to The End of the Linked List:
  append(value) {
    const newNode = new Node(value);
    
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode; 
    this.length++;
    return this;
  };               // O(1)

  // Adding Values to The Beginning of the Linked List:
  prepend(value) {
    const newNode = new Node(value);
    
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  };               // O(1)

  // Inserting Values to a specific Location inside Linked List:
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    };
    if (index === 0) {
      return this.prepend(value);
    };

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this;
  };               // O(n)

  remove(index) {
    if (index >= this.length) {
      console.log('Index Not Exist');
      return this;
    };
    if (index === 0) {
      const currentNode = this.head;
      this.head.value = currentNode.next.value;
      this.head.next = currentNode.next.next;
      this.head.prev = null;
      this.length--;
      return this;
    };

    const leader = this.traverseToIndex(index -1);
    const unwantedNode = leader.next;

    // Removing Node at a specific Index:
    leader.next = unwantedNode.next;
    const follower = leader.next;
    follower.prev = unwantedNode.prev;
    this.length--;
    return this;
  };               // O(n)

  // HELPER METHODS:
  // Convert Linked Lists into Arrays:
  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  };

  // Traverse Method:
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) { 
      currentNode = currentNode.next;
      counter++;
    };
    return currentNode;
  };
};

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.append(17);
myDoublyLinkedList.insert(2,170);
myDoublyLinkedList.remove(4);
myDoublyLinkedList.insert(4,102);
console.log('Array: ', myDoublyLinkedList.printList());
console.log('Append 102: ', myDoublyLinkedList);

/* 
myDoublyLinkedList.insert(99,180);
myDoublyLinkedList.insert(0,190);
console.log('Insert 190: ', myDoublyLinkedList.printList());

myDoublyLinkedList.remove(3);
console.log('Removing Value at Index 3: ', myDoublyLinkedList.printList());

console.log('Removing the First Node: ', myDoublyLinkedList.printList());

myDoublyLinkedList.remove(6);
console.log('Removing nonIndexed Value: ', myDoublyLinkedList.printList());

console.log('Linked List: ', myDoublyLinkedList);
*/