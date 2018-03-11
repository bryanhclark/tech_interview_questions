/*

1) iterates through array, taking one element each time and grows a sorted output list


Time complexity: O(n^2)
*/

//for loop to iterate through array
//let temp = arr[i]
//let j = i - 1



const insertionSort = array => {
  for (var i = 0; i < array.length; i++) {
    //store current value in temp
    let temp = array[i];
    //counter for previous items in array
    let j = i - 1;
    //while arr[j] exists && if arr[j] is greater than out current value

    while (j >= 0 && array[j] > temp) {
      //we want to move arr[j] over one to the right
      array[j + 1] = array[j];
      //and then go to the left and check the next vaue
      j--;
    }
    //if arr[j] doesnt exist or arr[j] is less than our current value, we want to put temp to the right of arr[j]
    array[j + 1] = temp;
  }
  return array;
}

let myArr = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

console.log(insertionSort(myArr))