//FInd the max sum of a subarray in a given array


const maxSumSubArray = arr => {
  let maxSum = arr[0]
  let currentMax = [0]
  for (let i = 1; i < arr.length; i++) {
    currentMax = Math.max(currentMax + arr[i], arr[i])
    if (currentMax > maxSum) maxSum = currentMax
  }
  return maxSum
}


let myArr = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, 4]

console.log(maxSumSubArray(myArr))