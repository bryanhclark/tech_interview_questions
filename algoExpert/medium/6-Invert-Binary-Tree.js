//interitive solution

const invertBinTree = tree => {
  let queue = []
  while (queue.length) {
    let current = queue.pop()
    if (!current) continue
    swapChildren(current)
    queue.push(current.left)
    queue.push(current.right)
  }
}

const swapChildren = node => {
  node.left, node.right = node.right, node.left
}


//recursive
const invertRecurs = tree => {
  if (!tree) return
  swapChildren(tree)
  invertRecurs(tree.left)
  invertRecurs(tree.right)
}