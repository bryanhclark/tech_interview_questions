//get nth fib numbers starting with 0

function getNthFib(n) {
  // Write your code here.
  return fibNumMemo(n)
}

const fibNumMemo = (num, memo) => {
  memo = memo || {}
  if (num === 1) return 0
  if (num === 2) return 1
  else if (memo[num]) return memo[num]
  return memo[num] = fibNumMemo(num - 1, memo) + fibNumMemo(num - 2, memo)
}
