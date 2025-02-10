/* Implement Queue using Linked List */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Francis");
myQueue.enqueue("X");
myQueue.enqueue("Y");
myQueue.dequeue();

console.log("Peek: ", myQueue.peek());
console.log("Queue: ", myQueue);

/* Implement Queue using Stack */
class StackQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }
}

const myStackQueue = new StackQueue();
myStackQueue.enqueue("Francis");
myStackQueue.enqueue("Phong");
myStackQueue.enqueue("Pham");
myStackQueue.dequeue();

console.log("SQPeek: ", myStackQueue.peek());
console.log("StackQueue: ", myStackQueue);
