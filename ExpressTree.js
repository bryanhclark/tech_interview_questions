//Expression tree


const evaluateExpTree = (root) => {
  if (!root) 0;
  if (!root.left) return root.data

  let leftSum = evaluateExpTree(root.left)
  let rightSum = evaluateExpTree(root.right)

  if (root.data === '+') return leftSum + rightSum
  else if (root.data === '-') return leftSum - rightSum
  else if (root.data === '*') return leftSum * rightSum
  else return leftSum / rightSum
}

const myExpTree = {
  data: '+',
  left: {
    data: '*',
    left: {
      data: 5,
      left: null,
      right: null
    },
    right: {
      data: 4,
      left: null,
      right: null
    }
  },
  right: {
    data: '-',
    left: {
      data: 100,
      left: null,
      right: null
    },
    right: {
      data: '/',
      left: {
        data: 20,
        left: null,
        right: null
      },
      right: {
        data: 2,
        left: null,
        right: null
      }
    }
  }
}
