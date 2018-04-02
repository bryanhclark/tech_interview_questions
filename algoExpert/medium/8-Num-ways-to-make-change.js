const numWaysToMakeChange = (n, denoms) => {
  let nums = new Array(n + 1).fill(0)
  nums[0] = 1
  for (let denom of denoms) {
    for (let i = 1; i < n + 1; i++) {
      if (denom <= i) {
        nums[i] += nums[i - denom]
      }
    }
  }
  return nums[n];
}


let myArray = [1, 5, 10, 25]

console.log(numWaysToMakeChange(10, myArray))