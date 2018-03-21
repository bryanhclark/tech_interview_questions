const permutations = string => {
  let perms = []
  if (string.length === 1) {
    perms.push(string)
    return perms
  }
  for (let i = 0; i < string.length; i++) {
    let currentLetter = string[i]
    let remainingLetter = string.substring(0, i) + string.substring(i + 1)
    let remainingPerms = permutations(remainingLetter)
    for (let k = 0; k < remainingPerms.length; k++) {
      perms.push(currentLetter + remainingPerms[k])
    }
  } return perms
}

let myStr = 'tac'

console.log(permutations(myStr))