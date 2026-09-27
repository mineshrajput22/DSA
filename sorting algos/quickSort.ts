/**
 * Returns the values in sorted order using the final value as each partition's pivot.
 * Average time: O(n log n); worst-case time: O(n^2). Space: O(n). Not stable.
 *
 * Pseudocode:
 * 1. If there are 0 or 1 numbers, they are already sorted; return them.
 * 2. Pick the last number as the pivot (the number to compare against).
 * 3. Put smaller numbers on the left; all other numbers on the right.
 * 4. Sort both groups using these same steps.
 * 5. Join the sorted left group, the pivot, and the sorted right group.
 */
function quickSort(arr: number[]): number[] {
	// A partition with at most one value is already sorted.
	if (arr.length <= 1) {
		return arr;
	}

	let pivot = arr[arr.length - 1]!;
	let left = [];
	let right = [];

	// Keep the pivot out of both partitions so it appears exactly once in the result.
	for (let i = 0; i < arr.length - 1; i++) {
		let value = arr[i]!;

		if (value < pivot) {
			left.push(value);
		} else {
			right.push(value);
		}
	}

	// Recursively sorted partitions belong on either side of the pivot.
	return [...quickSort(left), pivot, ...quickSort(right)];
}

const unsortedArray = [
	38, 27, 43, 3, 9, 82, 10, 19, 54, 2, 70, 31, 16, 5, 68, 23, 91, 12, 45, 60,
];

console.log('Input:', unsortedArray);
console.log('Result:', quickSort(unsortedArray));
