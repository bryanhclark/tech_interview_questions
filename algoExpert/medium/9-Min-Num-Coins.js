const minNumOfCoinsForChange = (n, denoms) => {
  let nums = (new Array(n + 1)).fill(Infinity)
  nums[0] = 0
  for (let coin of denoms) {
    for (let amount = 0; amount < nums.length; amount++) {
      if (coin <= amount) {
        nums[amount] = Math.min(nums[amount], nums[amount - coin] + 1)
      }
    }
  }
  return nums[n] === Infinity ? -1 : nums[n]
}


let myArray = [1, 2, 4]

console.log(minNumOfCoinsForChange(6, myArray))