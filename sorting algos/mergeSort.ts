function mergeSort(arr: number[]): number[] {
	// Arrays with zero or one element are already sorted.
	if (arr.length <= 1) {
		return arr;
	}

	// Split the array, sort each half recursively, then merge the results.
	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	// console.log('left side:' + left)
	const right = arr.slice(middle);
	// console.log('right side:' + right)

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]) {
	let result: number[] = [];
	let leftIndex = 0;
	let rightIndex = 0;

	// Repeatedly take the smaller front element from the two sorted halves.
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex]! < right[rightIndex]!) {
			result.push(left[leftIndex]!);
			leftIndex++;
		} else {
			result.push(right[rightIndex]!);
			rightIndex++;
		}
	}

	// Append the unconsumed portion of whichever half still has elements.
	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const unsortedArray = [
	38, 27, 43, 3, 9, 82, 10, 19, 54, 2, 70, 31, 16, 5, 68, 23, 91, 12, 45, 60,
];

console.log(mergeSort(unsortedArray));
