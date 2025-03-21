/* Implementation Stack using Linked List */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");

console.log("Peek: ", myStack.peek());
myStack.pop();
myStack.pop();
myStack.pop();
console.log("After Removing 3 Items: ", myStack);

/* Implementation Stack using Array */
class StackArray {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
  }

  pop() {
    this.array.pop();
    return this;
  }
}

const myStackArray = new StackArray();
myStackArray.push("Google");
myStackArray.push("Udemy");
myStackArray.push("Discord");
myStackArray.pop();

console.log("Stack from Array: ", myStackArray);
console.log("Peek: ", myStackArray.peek());
