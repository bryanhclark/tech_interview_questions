//selection sort
//uses nested loops


const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j

    }
    //once we get through the whole list, we swap arr[i] with arr[min]
    if (i !== min) swap(arr, i, min)
  }
  return arr
}

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}


let myArray = [3, 2, 1, 5, 4, 3, 6, 3]

console.log(selectionSort(myArray))