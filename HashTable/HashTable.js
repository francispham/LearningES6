class HashTable {
  constructor(size) {
    this.data = new Array(size);

  }

  // Kind of Hash Function:
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    };
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data
  }   // O(1)

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]; //  [1] is the Value of the Object
        }
      }
    }   // O(1)

    return undefined;
  }
}

const myHashTable = new HashTable(2);
// console.log(myHashTable._hash('grapes'));

myHashTable.set('grapes', 10000)
myHashTable.set('apple', 45)

console.log('Buckets: ', myHashTable.data);
console.log('Get Value of Apple: ', myHashTable.get('apple'));