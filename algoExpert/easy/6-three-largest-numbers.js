function findThreeLargestNumbers(array) {
  let threeLargest = new Array(3)
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    updateThreeLargest(threeLargest, array[i])
  }
  return threeLargest
}
//go through array backwards, check to see if a value exists and if that value is > currentValue
//if value > current value, 
const updateThreeLargest = (array, num) => {
  if (!array[2] || num > array[2]) shiftAndUpdate(array, num, 2)
  else if (!array[1] || num > array[1]) shiftAndUpdate(array, num, 1)
  else if (!array[0] || num > array[0]) shiftAndUpdate(array, num, 0)
}

const shiftAndUpdate = (array, num, index) => {
  for (let i = 0; i < index + 1; i++) {
    if (i == index) array[i] = num
    else {
      array[i] = array[i + 1]
    }
  }
}

let myArray = [5, 3, 2, 17, 2, 3, 54, 3, 6] //[6, 17 ,54]

console.log(findThreeLargestNumbers(myArray))

