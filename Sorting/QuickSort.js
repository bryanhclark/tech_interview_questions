/*

1) divides the array into two smaller sub-array, smaller and larger elements
2) recursively soft the sub-arrays

Time Complexity: O(n log(n))
*/

const quickSort = arr => {
  if (arr.length < 2) {
    return arr
  }

  let pivot = arr[0]
  let lesser = []
  let greater = []

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) lesser.push(arr[i])
    else greater.push(arr[i])
  }

  return quickSort(lesser).concat(pivot, quickSort(greater))
}

let myArray = [2, 5, 6, 4, 3, 7, 10, 8]

console.log(quickSort(myArray))