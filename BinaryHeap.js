//implementation of a Binary Min Heap
function BinaryMinHeap() {
  this.array = [null]
}

BinaryMinHeap.prototype.insert = function (data) {
  this.array.push(data)
  this.heapifyUp(this.array.length - 1)
}

BinaryMinHeap.prototype.heapifyUp = function (deepestIndx) {
  let currentIndx = deepestIndx
  //while there is a parent, and while this.array[currentInd] < this.array[this.parentIndex(currentIndx)]
  while (this.parentIndex(currentIndx) && this.array[currentIndx] < this.array[this.parentIndex(currentIndx)]) {
    this.swap(currentIndx, this.parentIndex(currentIndx))
    currentIndx = this.parentIndex(currentIndx)
  }

}

BinaryMinHeap.prototype.parentIndex = function (childIndex) {
  return Math.floor(childIndex / 2)
}

BinaryMinHeap.prototype.childrenIndex = function (parentIndex) {
  return [parentIndex * 2, parentIndex * 2 + 1]
}

BinaryMinHeap.prototype.swap = function (childIndex, parentIndex) {
  [this.array[childIndex], this.array[parentIndex]] = [this.array[parentIndex], this.array[childIndex]]
}

BinaryMinHeap.prototype.size = function () {
  return this.array.length - 1
}

BinaryMinHeap.prototype.popMin = function () {
  const min = this.array[1]
  if (this.size() === 1) {
    this.array.pop()
    return min
  }
  this.array[1] = this.array.pop()
  this.heapifyDown(1)
  return min
}

BinaryMinHeap.prototype.heapifyDown = function (rootIndex) {
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
      [l, r] = this.childrenIndex(currentParent)
    } else return
  }
}


let myHeap = new BinaryMinHeap()

myHeap.insert(10)
myHeap.insert(9)
myHeap.insert(8)
myHeap.insert(7)
myHeap.insert(6)
myHeap.popMin()
console.log(myHeap.childrenIndex(2))

console.log(myHeap)