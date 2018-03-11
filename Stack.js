//Stack LIFO
//mthods: push (add), pop(remove), peek(see current top w/o removing it), length, print


class Stack {
  constructor() {
    this.data = []
  }

  push(value) {
    this.data.push(value)
  }

  pop() {
    return this.data.pop()
  }

  peek() {
    return this.data[this.data.length - 1]
  }

  length() {
    return this.data.length
  }

  print() {
    return this.data.join('-')
  }
}

let myStack = new Stack()

myStack.push(3)
myStack.push(2)
myStack.push(8)
myStack.push(9)
myStack.push(10)
console.log(myStack.peek())