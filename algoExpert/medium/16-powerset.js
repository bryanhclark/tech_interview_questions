//iteritive

const powerSet = arr => {
  console.log('here')
  let result = [[]]

  for (let i = 0; i < arr.length; i++) {
    let length = result.length
    for (let j = 0; j < length; j++) {
      let current = result[j]
      result.push(current.concat(arr[i]))
    }
  }
  return result
}

// console.log(powerSet([1, 2, 3]))


//recursive

const powerSetRecursive = (arr, idx = null) => {
  if (idx === null) idx = arr.length - 1
  if (idx < 0) return [[]]
  //get last element in arr
  const ele = arr[idx]
  const subsets = powerSetRecursive(arr, idx - 1)
  const length = subsets.length
  for (let i = 0; i < length; i++) {
    const currentSubset = subsets[i]
    subsets.push(currentSubset.concat(ele))
  }
  return subsets
}

console.log(powerSetRecursive([1, 2, 3]))