//Bubble Sort
//helper function = swap
//Time Complexity: O(n^2)

const bubbleSort = arr => {
  let hasBeenSwapped
  do {
    hasBeenSwapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let swappedArr = [arr[i + 1], arr[i]]
        arr[i] = swappedArr[0]
        arr[i + 1] = swappedArr[1]
        hasBeenSwapped = true
      }
    }
  } while (hasBeenSwapped)
  return arr
}

let myArr = [4, 3, 0, 5, 8, 1, 2]

console.log(bubbleSort(myArr))
