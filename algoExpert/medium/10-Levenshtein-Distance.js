//DYNAMIC Programming:
//main ideas
//create a 2-D ARRAY(rows/columns) that's one larger than each string in size
//the first column is str1 vs an empty string
//so it will increase as you add more letters in comparison
//this is essentially the base case
//you then look to see if each letter between the strings is the same or different
//if it's the same, look to the diagonal up/left and grab that number = edits[i][j]
//if it's not, look the the minimum value in the three adjacent spots, up, left, up/left and then add one
//return the last index of the last row to get the min num of edits

//Time O(n*m)
//Space O(n*m)

const numEdits = (str1, str2) => {
  const edits = []
  for (let a = 0; a < str2.length + 1; a++) {
    const row = []
    for (let b = 0; b < str1.length + 1; b++) {
      row.push(b)
    }
    row[0] = a
    edits.push(row)
  }
  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        edits[i][j] = edits[i - 1][j - 1]
      }
      else {
        edits[i][j] = 1 + Math.min(edits[i - 1][j], edits[i - 1][j - 1], edits[i][j - 1])
      }
    }
  }
  return edits
}

let mystr2 = 'abcy'
let mystr1 = 'abc'


console.log(numEdits(mystr1, mystr2))