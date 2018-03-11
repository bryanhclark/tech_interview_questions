//Uses a linked List for collisions

class HashNode {
  constructor(key, value) {
    this.key = key
    this.value = value
  }

  valueOf() {
    return this.value
  }
}

class HashTable {
  constructor() {
    this.buckets = new Array(35)
  }

  get numBuckets() {
    return this.buckets.length
  }

  set(key, value) {
    if (typeof key !== string) throw new TypeError('Keys Must Be Strings')
    let index = this.hash(key)
    if (!this.buckets[index]) this.buckets[index] = //new Linked List
      this.buckets[index].addToHead(/* new HashNode(key,value*/)
  }

  hash(key) {
    let sum = 0
    for (let i = 0; i < ket.length; i++) {
      sum += key.charCodeAt(i)
    }
    return sum
  }
}


let myHashTable = new HashTable()
console.log(myHashTable.numBuckets)