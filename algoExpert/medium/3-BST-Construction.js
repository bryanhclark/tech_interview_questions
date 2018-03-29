//create a BST
//create methods - insert, contains, remove

class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value) {
    if (value < this.value) {
      //go left
      if (!this.left) this.left = new BST(value)
      else this.left.insert(value)
    } else {
      //go right
      if (!this.right) this.right = new BST(value)
      else this.right.insert(value)
    }
  }

  contains(value) {
    let current = this
    while (current) {
      if (value === current.value) return true
      else if (value < current.value) current = current.left
      else current = current.right
    } return false
  }

  remove(value, parentNode = null) {
    currentNode = this
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.left
      }
      else if (value > currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.right
      }
      else {
        //we have found the value, but there are two children
        if (currentNode.left && currentNode.right) {
          //we find the mininum value in the right branch to replace current node
          currentNode.value = currentNode.right.getMinValue()
          // then we remove that node
          currentNode.right.remove(currentNode.value, currentNode)
        }
        //we're at the root node with only one child
        else if (!parentNode) {
          if (!currentNode.left) {
            currentNode.value = currentNode.left.value
            currentNode.right = currentNode.left.right
            currentNode.left = currentNode.left.left
          }
          else if (!currentNode.right) {
            currentNode.value = currentNode.right.value
            currentNode.left = currentNode.right.left
            currentNode.right = currentNode.right.right
          }
          //want to remove a parent node w/ node children
          else {
            currentNode.value = none
          }
        }
        //we're not at the parent node, and there's only one child node
        else if (parentNode.left === currentNode) {
          parentNode.left = currentNode.left ? currentNode.left : currentNode.right
        }
        else if (parentNode.right === currentNode) {
          parentNode.right = currentNode.left ? currentNode.left : currentNode.right
        }
      }
    }
  }

  getMinValue() {
    let current = this
    while (!current.left) {
      current = currentNode.left
    }
    return currentNode.value
  }


}