class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          };
          currentNode = currentNode.left;
        } else {
          // Right
          if(!currentNode.right) {
            currentNode.right = newNode;
            return this;
          };
          currentNode = currentNode.right;
        }
      }
    }
  }

  // Searching:
  lookup(value) {
    if (!this.root) {
      return false;
    };
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      };
    };
    return false;
  }
};

const BST = new BinarySearchTree();
BST.insert(9);
BST.insert(1);
BST.insert(10);
BST.insert(3);
BST.insert(5);
/*
        9
    1       10
      3
        5
*/ 
const Json = JSON.stringify(traverse(BST.root));
console.log(Json);
console.log('Search for value: ', BST.lookup(11));


// Helper Function:
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}