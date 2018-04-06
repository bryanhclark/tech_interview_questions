const balancedBrackets = str => {
  let queue = []
  let matchingPairs = { '{': '}', '[': ']', '(': ')' }
  let open = '{(['
  for (let bracket of str) {
    if (open.includes(bracket)) queue.unshift(bracket)
    else if (!open.includes(bracket)) {
      if (!queue.length) return false
      if (matchingPairs[queue[0]] === bracket) queue.shift()
      else return false
    }
  } return queue.length === 0;
}

let myBrackets = '{([])}/'

console.log(balancedBrackets(myBrackets))