/*

1) Divides the input intwo two parts: sublist of sorted and sublist of unsorted
2) The sorted sublisted starts empty, and the unsorted sublist starts as the whole list
3) Sort by finding the smallest element in the unsorted sublist, exchanging it with the leftmost unsorted element
4) Then moves the boundaries for sorted to the right one, and the boundaries for unsorted to the left one

Selection sort: (nested loops)
helper functions: swap

Time Complexity: always 0(n^2)
*/


const swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const selectionSort = arr => {
  //initial for loop to iterate through the array
  for (let i = 0; i < arr.length; i++) {
    let min = i
    //start nested for loop ahead of i
    //this moves the boundaries as we iterate through with the parent for loop
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j
    }
    if (i !== min) swap(arr, i, min)
  }
  return arr
}

let myArray = [4, 3, 2, 1, 7, 6, 4, 5, 2]

console.log(selectionSort(myArray))
