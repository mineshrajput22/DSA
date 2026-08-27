/**
 * Sorts the array in place by repeatedly selecting the smallest unsorted value.
 * Time: O(n^2) in all cases. Space: O(1). Not stable.
 */
function selectionSort(arr: number[]): number[] {
	for (let i = 0; i < arr.length - 1; i++) {
		let minIndex = i;

		// Find the minimum in the unsorted suffix; the prefix before i is final.
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j]! < arr[minIndex]!) {
				minIndex = j;
			}
		}

		let temp = arr[minIndex];
		arr[minIndex] = arr[i]!;
		arr[i] = temp!;
	}

	return arr;
}

const unsortedArray = [
	38, 27, 43, 3, 9, 82, 10, 19, 54, 2, 70, 31, 16, 5, 68, 23, 91, 12, 45, 60,
];

console.log('Input:', unsortedArray);
console.log('Result:', selectionSort(unsortedArray));
