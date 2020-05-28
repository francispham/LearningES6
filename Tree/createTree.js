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

  /*
  Advance Algorithm:
    Step1: Find the Value by setting 2 References: currentNode & parentNode
    Step2: When having a Match, finding the left and right Nodes for shifting Nodes around
    Step3: 
  */  
  remove(value) {
    if (!this.root) {
      return false;
    };
    let currentNode = this.root; //60
    let parentNode = null;
    // Looping until Value Found:
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode; //60
        currentNode = currentNode.left; // 
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      // After Value Found:
      } else if (currentNode.value === value) {
        
        // Situation 1: No Right Child Node
        if (currentNode.right === null) {
          
          // Check if there is a parentNode:
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            // Deciding on which SIDE of the parentNode that 
            // the node on the LEFT SIDE of the Deleted Node will be moved to 
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }


        // Situation 2: No Left Child Node && A Right Child Node
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          
          // Check if there is a parentNode:
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {

            // if parent > current, make Right Child Node of the Left the Parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            
            // if parent > current, make Right Child Node of the RIGHT the Parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }


        // Situation 3: Right Child Node has a Left Child Node
        } else {
          
          // Find the Right Child's leftmost Child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          };

          // Parent's Left Subtree is now leftmost's Right Subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;


          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        };
        return true;
      };
    };
  }
};

const BST = new BinarySearchTree();
BST.insert(60);
BST.insert(59);
BST.insert(100);
BST.insert(63);
BST.insert(5);
/*
          60
    59         100
  5          63   
*/

BST.remove(59)

const Json = JSON.stringify(traverse(BST.root));
// console.log('Search for value: ', BST.lookup(11));

console.log(Json);

// Helper Function:
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}