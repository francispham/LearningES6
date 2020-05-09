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
}

const myHashTable = new HashTable(50);
console.log(myHashTable._hash('grapes'));


// myHashTable.set('grapes', 10000);
// myHashTable.set('grapes');