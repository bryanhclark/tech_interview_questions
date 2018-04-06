const riverSizes = matrix => {
  const sizes = []
  const visited = matrix.map(row => row.map(val => false))
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) continue
      traverseNode(i, j, matrix, visited, sizes)
    }
  }
  return sizes
}

const traverseNode = (i, j, matrix, visited, sizes) => {
  let currentRiver = 0
  let stack = [[i, j]]
  while (stack.length) {
    let [i, j] = stack.pop()
    if (visited[i][j]) continue
    visited[i][j] = true
    if (matrix[i][j] === 0) continue
    currentRiver++
    const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited)
    for (const neighbor of unvisitedNeighbors) stack.push(neighbor)
  }
  if (currentRiver > 0) sizes.push(currentRiver)
}

const getUnvisitedNeighbors = (i, j, matrix, visited) => {
  const unvisitedNeighbors = []
  //i = row
  //j = column
  //above [i-1][j]
  if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j])
  //left [i][j-1]
  if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1])
  //right[i][j+i]
  if (j < matrix.length - 1 && !visited[i][j + 1]) unvisitedNeighbors.push([i, j + 1])
  //below[i+1][j]
  if (i < matrix.length - 1 && !visited[i + 1][j]) unvisitedNeighbors.push([i + 1, j])
  return unvisitedNeighbors
}


//results = [1, 2, 2, 2, 5]
let myMatrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
]


console.log(riverSizes(myMatrix))