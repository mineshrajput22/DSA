/**
 * Sorts the array in place by inserting each value into the sorted prefix.
 * Time: O(n) best case and O(n^2) average/worst case. Space: O(1). Stable.
 */
function insertionSort(arr: number[]): number[] {
	for (let i = 1; i < arr.length; i++) {
		let currentElement = arr[i]!;
		let j = i - 1;

		// Shift larger prefix values right to open the insertion position.
		while (j >= 0) {
			if (arr[j]! <= currentElement) {
				break;
			}

			arr[j + 1] = arr[j]!;
			j--;
		}

		arr[j + 1] = currentElement;
	}

	return arr;
}

const unsortedArray = [
	38, 27, 43, 3, 9, 82, 10, 19, 54, 2, 70, 31, 16, 5, 68, 23, 91, 12, 45, 60,
];

console.log('Input:', unsortedArray);
console.log('Result:', insertionSort(unsortedArray));
