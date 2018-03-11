//Bubble Sort
//helper function = swap

const bubbleSort = arr => {
  let hasBeenSwapped
  do {
    hasBeenSwapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let swappedArr = swap(arr[i], arr[i + 1])
        arr[i] = swappedArr[0]
        arr[i + 1] = swappedArr[1]
        hasBeenSwapped = true
      }
    }
  } while (hasBeenSwapped)
  return arr
}

const swap = (a, b) => [b, a]

let myArr = [4, 3, 2, 5, 8, 1, 2]

console.log(bubbleSort(myArr))
