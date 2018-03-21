
//time O(log n) / space O(log n) dur to recursive calls
const findClosestValueInBst = (tree, target) => {
  return bstHelper(tree, target, Infinity)
}

const bstHelper = (tree, target, closest) => {
  if (!tree) return closest
  if (Math.abs(target - tree.value) < Math.abs(target - closest)) {
    closest = tree.value
  }
  if (tree.value > target) {
    //look left
    return bstHelper(tree.left, target, closest)
  }
  if (tree.value < target) {
    //look right
    return bstHelper(tree.right, target, closest)
  } else return closest
}


class BinaryTree {
  constructor(int) {
    this.value = int
    this.left = null
    this.right = null
  }

  addToTree(int) {
    if (int >= this.value) {
      if (!this.right) this.right = new BinaryTree(int)
      else this.right.addToTree(int)
    } else {
      if (!this.left) this.left = new BinaryTree(int)
      else this.left.addToTree(int)
    }
  }
}

let myTree = new BinaryTree(6)
myTree.addToTree(1)
myTree.addToTree(4)
myTree.addToTree(3)
myTree.addToTree(7)
myTree.addToTree(10)

console.log(findClosestValueInBst(myTree, 2)) //1 because it's found first, 3 is also the same difference but is not less than the diference between 2-1