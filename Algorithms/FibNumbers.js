//without Memoization:
const fibNumbers = num => {
  if (num <= 1) return 1
  else return fibNumbers(num - 1) + fibNumbers(num - 2)
}


console.log('without memo', fibNumbers(6)); //13


//fib numbers with memoization

const fibNumMemo = (num, memo) => {
  memo = memo || {}
  if (num <= 1) return 1
  else if (memo[num]) return memo[num]


  return memo[num] = fibNumMemo(num - 1, memo) + fibNumMemo(num - 2, memo)
}


console.log('with memmo', fibNumMemo(6))