//take in a bst and return true if it's valid
//valid BST's have left nodes that are smaller than the parent and right nodes greater than or equal to parent

const validateBST = (tree) => {
  return validateBSTHelper(tree, -Infinity, Infinity)
}

const validateBSTHelper = (tree, min, max) => {
  if (!tree) return true
  if (tree.value < min || tree.value >= max) return false
  leftIsValid = validateBSTHelper(tree.left, min, tree.value)
  return leftIsValid && validateBSTHelper(tree.right, tree.value, max)
}