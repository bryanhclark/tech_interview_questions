

class BinaryTree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  breadthFirstSearch(func, node = this) {
    let queue = [node]
    while (queue.length) {
      let current = queue.shift()
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
      func(current.value)
    }
  }

  addToTree(value) {
    if (value >= this.value) {
      if (!this.right) this.right = new BinaryTree(value)
      else this.right.addToTree(value)
    }
    else if (value < this.value) {
      if (!this.left) this.left = new BinaryTree(value)
      else this.left.addToTree(value)
    }
  }
}


let myTree = new BinaryTree(5)
myTree.addToTree(6)
myTree.addToTree(1)
myTree.addToTree(2)
myTree.addToTree(5)
myTree.addToTree(7)
myTree.addToTree(3)
const myFunc = (val) => console.log(Math.pow(val, 2))


myTree.breadthFirstSearch(myFunc)