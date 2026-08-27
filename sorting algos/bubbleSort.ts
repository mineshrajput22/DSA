/**
 * Sorts the array in place by repeatedly swapping adjacent out-of-order values.
 * Time: O(n) best case and O(n^2) average/worst case. Space: O(1). Stable.
 */
function bubbleSort(arr: number[]): number[] {
	for (let i = 0; i < arr.length; i++) {
		let swapped = false;

		// Each pass places the largest remaining value at the end of the unsorted region.
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j]! > arr[j + 1]!) {
				let temp = arr[j];
				arr[j] = arr[j + 1]!;
				arr[j + 1] = temp!;
				swapped = true;
			}
		}

		// A pass without a swap proves that every adjacent pair is already ordered.
		if (!swapped) {
			break;
		}
	}

	return arr;
}

const unsortedArray = [
	38, 27, 43, 3, 9, 82, 10, 19, 54, 2, 70, 31, 16, 5, 68, 23, 91, 12, 45, 60,
];

console.log('Input:', unsortedArray);
console.log('Result:', bubbleSort(unsortedArray));
