/**
 * Returns the values in sorted order by recursively sorting and merging two halves.
 * Time: O(n log n). Space: O(n). Does not mutate the input. Not stable as written.
 *
 * Pseudocode:
 * 1. If there are 0 or 1 numbers, they are already sorted; return them.
 * 2. Split the array into two halves.
 * 3. Sort each half using these same steps.
 * 4. Combine the sorted halves using the merge steps below.
 */
function mergeSort(arr: number[]): number[] {
	if (arr.length <= 1) {
		return arr;
	}

	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
}

/**
 * Merges two sorted arrays while preserving ascending order.
 *
 * Pseudocode:
 * 1. Compare the next unused number from each half.
 * 2. Add the smaller one to the result (take the right one if equal).
 * 3. Repeat until one half has no numbers left.
 * 4. Add all leftover numbers from the other half and return the result.
 */
function merge(left: number[], right: number[]) {
	let result: number[] = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex]! < right[rightIndex]!) {
			result.push(left[leftIndex]!);
			leftIndex++; // Move the pointer for the left array forward.
		} else {
			result.push(right[rightIndex]!);
			rightIndex++; // Move the pointer for the right array forward.
		}
	}

	// Once one side is exhausted, the other side is already ordered.
	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const unsortedArray = [
	38, 27, 43, 3, 9, 82, 10, 19, 54, 2, 70, 31, 16, 5, 68, 23, 91, 12, 45, 60,
];

console.log(mergeSort(unsortedArray));
