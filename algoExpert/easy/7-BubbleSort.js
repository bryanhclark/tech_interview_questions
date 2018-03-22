//implement bubble sort
const bubbleSort = arr => {
  let hasBeenswapped;
  do {
    hasBeenswapped = false
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        hasBeenswapped = true
      }
    }
  } while (hasBeenswapped)
  return arr
}

let myArray = [2, 1, 3, 4, 6, 2, 7, 2]

console.log(bubbleSort(myArray))
