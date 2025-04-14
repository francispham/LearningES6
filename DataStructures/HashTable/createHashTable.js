class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // Kind of Hash Function:
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  } // O(1)

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]; //  [1] is the Value of the Object
        }
      }
    } // O(1)

    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        // console.log(this.data[i]);
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }

  // Keys Without Hash Collision:
  keysEnhanced() {
    if (!this.data.length) {
      return undefined;
    }
    let result = [];
    // Loop through All the Elements
    for (let i = 0; i < this.data.length; i++) {
      // If It's not an Empty Memory Cell
      if (this.data[i] && this.data[i].length) {
        // But also Loop through All the Potential Collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0]);
          }
        } else {
          result.push(this.data[i][0]);
        }
      }
    }
    return result;
  }
}

const myHashTable = new HashTable(50); // 50 is the Size of the Hash Table

myHashTable.set("grapes", 10000);
myHashTable.set("apple", 45);
myHashTable.set("orange", 2);

console.log("Keys: ", myHashTable.keys());
console.log("Keys Enhanced: ", myHashTable.keysEnhanced());

console.log("Get Value of Apple: ", myHashTable.get("apple"));

console.log("Grapes' Hash: ", myHashTable._hash("grapes"));

console.log("Buckets: ", myHashTable.data);
