//given a sorted array, use BST to find is a target exist and return that index, if not, return -1
//iteratively
const bsArray = (array, target) => {
  let left = 0
  let right = array.length - 1
  while (left < right) {
    let middle = Math.floor((left + right) / 2)
    if (array[middle] === target) return target
    else if (array[middle] > target) right = middle - 1
    else left = middle + 1
  }
  return -1
}


//recursively
const bsArrayRecurs = (array, target) => {
  return _bsArrayRecurs(array, target, 0, array.length - 1)
}

const _bsArrayRecurs = (array, target, left, right) => {
  if (left > right) return -1
  let middle = Math.floor((left + right) / 2)
  if (target === array[middle]) return middle
  else if (target > array[middle]) return _bsArrayRecurs(array, target, middle + 1, right)
  else return _bsArrayRecurs(array, target, left, middle - 1)
}


let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

console.log(bsArray(myArray, 24))
console.log(bsArrayRecurs(myArray, 9))

