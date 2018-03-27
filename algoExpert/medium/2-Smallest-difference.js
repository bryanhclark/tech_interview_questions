//between two arrays, calculate the pair of integers, one in each array, with the smallest difference


const smallestDiff = (arr1, arr2) => {
  arr1.sort((a, b) => a - b)
  arr2.sort((a, b) => a - b)
  let left = 0
  let right = 0
  let current;
  let smallest = Infinity
  let pair = []
  while (left < arr1.length && right < arr2.length) {
    let first = arr1[left]
    let second = arr2[right]
    current = Math.abs(first - second)
    if (first > second) right++
    else if (first < second) left++
    else return [first, second]
    if (current < smallest) {
      smallest = current
      pair = [first, second]
    }
  }
  return pair
}



let myArr1 = [3, 2, 5, 7, 4, 1]
let myArr2 = [8, 9, 11, 6]

console.log(smallestDiff(myArr1, myArr2))