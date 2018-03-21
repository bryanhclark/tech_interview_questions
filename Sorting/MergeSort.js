//Function merge sort
//helper funcs: merge + split
//Time Complexity: O(n log(n))

const mergeSort = arr => {
  if (arr.length < 2) return arr
  let half = Math.ceil(arr.length / 2)
  let first = arr.slice(0, half)
  let second = arr.slice(half)
  return merge(mergeSort(first), mergeSort(second))
}

const merge = (arr1, arr2) => {
  const merged = []
  let leftIndex = 0; rightIndex = 0
  while (leftIndex < arr1.length && rightIndex < arr2.length) {
    arr1[leftIndex] < arr2[rightIndex] ? merged.push(arr1[leftIndex++]) : merged.push(arr2[rightIndex++])
  }
  for (; leftIndex < arr1.length; leftIndex++) merged.push(arr1[leftIndex])
  for (; rightIndex < arr2.length; rightIndex++) merged.push(arr2[rightIndex])
  return merged
}


let myArray = [3, 5, 6, 12, 4, 1, 2, 3, 5]

console.log(mergeSort(myArray))