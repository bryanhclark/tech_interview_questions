//parent node = Math.floor(childIndex /2)
//children index = parent*2 / parent*2 + 1

class BinMinHeap {
  constructor() {
    this.array = [null]
  }

  parentIndex(childIndex) {
    return Math.floor(childIndex / 2)
  }

  childrenIndex(parentIndex) {
    return [parentIndex * 2, parentIndex * 2 + 1]
  }

  swap(index1, index2) {
    [this.array[index1], this.array[index2]] = [this.array[index2], this.array[index1]]
  }

  size() {
    return this.array.length - 1
  }

  insert(data) {
    this.array.push(data)
    //pass in index to be heapified up
    this.heapifyUp(this.array.length - 1)
  }

  heapifyUp(index) {
    while (this.parentIndex(index) && this.array[index] < this.array[this.parentIndex(index)]) {
      this.swap(index, this.parentIndex(index))
      index = this.parentIndex(index)
    }
  }

  popMin() {
    const min = this.array[1]
    if (this.size() === 1) {
      this.array.pop()
      return min
    }
    //move the last node to the front and heapify down
    this.array[1] = this.array.pop()
    this.heapifyDown(1)
    return min
  }

  heapifyDown(rootIndex) {
    let currentParent = rootIndex
    let [l, r] = this.childrenIndex(currentParent)
    let indexSmaller;
    while (this.array[l]) {
      //check to see which children is the smaller one
      if (this.array[r]) {
        indexSmaller = this.array[l] <= this.array[r] ? l : r
      } else indexSmaller = l
      if (this.array[currentParent] > this.array[indexSmaller]) {
        this.swap(indexSmaller, currentParent)
        currentParent = indexSmaller
        let [l, r] = this.childrenIndex(currentParent)
      } else return
    }
  }

}


let myHeap = new BinMinHeap()

myHeap.insert(10)
myHeap.insert(9)
myHeap.insert(8)
myHeap.insert(7)
myHeap.insert(6)
myHeap.popMin()
console.log(myHeap.childrenIndex(2))

console.log(myHeap)