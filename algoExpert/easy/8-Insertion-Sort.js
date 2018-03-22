//bubble sort
//swap helper function


const insertionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1
    let temp = arr[i]
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = temp
  }
  return arr
}







let myArray = [4, 3, 2, 1, 6, 2, 4]


console.log(insertionSort(myArray))