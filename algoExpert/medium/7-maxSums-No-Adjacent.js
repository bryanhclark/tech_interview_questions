//find the max sum within an array of positive numbers, where no numbers are adjacent to eachother
//DYNAMIC Programming

const maxSumNoAdjacentNumbers = arr => {
  if (!arr.length) return
  else if (arr.length === 1) return arr[0]
  let maxSums = [1, 2, 3]
  maxSums[1] = Math.max(arr[0], arr[1])
  for (let i = 2; i < arr.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + arr[i])
  }
  return maxSums[maxSums.length - 1]
}






let myArray = [4, 3, 2, 1, 11, 15, 6]

console.log(maxSumNoAdjacentNumbers(myArray))