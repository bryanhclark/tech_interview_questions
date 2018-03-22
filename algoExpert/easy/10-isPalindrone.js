//recursively determine if string is palindrone
//O(n) time // O(n) space
const isPalindroneRecurs = (str, i = 0) => {
  j = str.length - 1 - i
  //we're at the middle of the string
  if (i >= j) return true
  if (str[i] !== str[j]) return false
  return isPalindroneRecurs(str, i + 1)
}


//best solution
//O(n) time / O(1) space
const isPalindroneIterative = (str) => {
  let left = 0
  let right = str.length - 1
  while (left < right) {
    if (str[left] !== str[right]) return false
    left++
    right--
  }
  return true
}


let myStr = 'racecar'

console.log(isPalindroneRecurs(myStr))
console.log(isPalindroneIterative(myStr))