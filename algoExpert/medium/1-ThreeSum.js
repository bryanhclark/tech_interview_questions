//threesum

const threeSum = (arr, target) => {
  let results = []
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1
    let right = arr.length - 1
    while (left < right) {
      let currentSum = arr[i] + arr[left] + arr[right]
      if (currentSum === target) {
        results.push([arr[i], arr[left], arr[right]])
        left++
        right--
      } else if (currentSum > target) right--
      else if (currentSum < target) left++
    }
  }
  return results
}

let myArr = [12, 3, 1, 2, -6, 5, -8, 6]

console.log(threeSum(myArr, 0))