const inOrderTraverse = (tree, array) => {
  if (tree) {
    inOrderTraverse(tree.left, array)
    array.push(tree.value)
    inOrderTraverse(tree.right, array)
  }
  return array
}

const preOrderTraversal = (tree, array) => {
  if (tree) {
    array.push(tree.value)
    preOrderTraversal(tree.left, array)
    preOrderTraversal(tree.right, array)
  }
  return array
}

const postOrderTraversal = (tree, array) => {
  if (tree) {
    postOrderTraversal(tree.left)
    postOrderTraversal(tree.right)
    array.push(tree.value)
  }
  return array
}