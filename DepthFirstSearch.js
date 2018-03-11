//binary Tree class


class BinaryTree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
  //check if value exists
  //if
  addToTree(value) {
    if (value < this.value) {
      if (!this.left) this.left = new BinaryTree(value)
      else this.left.addToTree(value)
    }
    else if (value >= this.value) {
      if (!this.right) this.right = new BinaryTree(value)
      else this.right.addToTree(value)
    }
  }

  //order hear is option
  //func hear will run on every node in the tree
  depthFirstSearch(func, order) {
    if (order === 'pre-order') func(this.value)
    if (this.left) this.left.depthFirstSearch(func, order)
    if (order === 'in-order') func(this.value)
    if (this.right) this.right.depthFirstSearch(func, order)
    if (order === 'post-order') func(this.value)
  }

  contains(value) {
    if (value === this.value) return true
    if (value < this.value) {
      if (!this.left) return false
      else return this.left.contains(value)
    }
    else if (value > this.value) {
      if (!this.right) return false
      else return this.right.contains(value)
    }
  }
}

let myTree = new BinaryTree(5)
myTree.addToTree(3)
myTree.addToTree(4)
myTree.addToTree(7)
myTree.addToTree(20)
myTree.addToTree(8)
console.log(myTree.remove(11))