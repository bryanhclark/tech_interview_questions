const searchInSortedMatrix = (matrix, target) => {
  let row = 0
  let column = matrix[0].length - 1
  while (row < matrix.length && column >= 0) {
    if (matrix[row][column] === target) return [row, column]
    else if (matrix[row][column] > target) column--
    else if (matrix[row][column] < target) row++
  }
  return [-1, -1]
}


let myMatrix =
  [[1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004]]

console.log(searchInSortedMatrix(myMatrix, 1))