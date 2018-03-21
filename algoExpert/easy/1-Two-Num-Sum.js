//two targetSum
//takes an array of integers and returns a sorted array if any two numbers add up to that number

//O(n) time / O(n) space
//hash map solution
const twoNumberSum = (array, targetSum) => {
	// Write your code here.
	let targArr = []
	let sumHash = {}
	for (let i = 0; i < array.length; i++) {
		let currentVal = array[i]
		if (sumHash[currentVal]) {
			targArr.push(currentVal)
			targArr.push(sumHash[currentVal])
		} else {
			sumHash[targetSum - currentVal] = currentVal
		}
	}
	return targArr.sort((a, b) => a - b)
}


//binary tree solution
//O(n log n) time / O(1) space

const twoSumBin = (arr, targetSum) => {
	arr.sort()
	let leftIndex = 0
	let rightIndex = arr.length - 1

}



let myArray = [4, 2, 6, 3, 7, 8, 1]



console.log(twoNumberSum(myArray, 5))