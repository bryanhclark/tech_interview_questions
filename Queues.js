//Queues
//methods : enqueu, dequeue, size

class Queue {
  constructor() {
    this.magnitude = 0
    this.data = []
  }

  enqueue(value) {
    this.magnitude++
    this.data.push(value)
  }

  dequeue() {
    if (this.size()) {
      this.magnitude--
      return this.data.shift()
    }
  }

  size() {
    return this.magnitude
  }
}


let myQueue = new Queue()

myQueue.enqueue(4)
myQueue.enqueue(3)
myQueue.enqueue(7)
console.log(myQueue.size()) //3
myQueue.dequeue()
console.log(myQueue.size()) //2
myQueue.enqueue(8)

console.log(myQueue)