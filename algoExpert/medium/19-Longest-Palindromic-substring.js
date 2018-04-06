//iterate through str, check the letter before and the letter after to see if current letter is the middle(odd length palindrone)
//also check to see if the letter behind is equal to current letter(even length palindrone)

const longestPalindroneSubstring = str => {
  let currentLongest = [0, 1]
  for (let i = 0; i < str.length; i++) {
    const odd = getIndicies(str, i - 1, i + 1)
    const even = getIndicies(str, i - 1, i)
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even
    currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest
  }
  return str.slice(currentLongest[0], currentLongest[1])
}

const getIndicies = (str, left, right) => {
  while (left >= 0 && right < str.length) {
    if (str[left] !== str[right]) break
    left--
    right++
  }
  return [left + 1, right]
}


let str1 = 'it\'s a highnoon'
let str2 = 'noon high it is'
let str3 = "abccbait's highnoon"
let str4 = "abaxyzzyxf"
let myStr = 'aaaaaaaa'
console.log(longestPalindroneSubstring(myStr))