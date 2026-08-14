function bubbleSort(arr: number[]): number[] {
	// Each pass moves the largest unsorted value to the end of the array.
	for (let i = 0; i < arr.length; i++) {
		let swapped = false;
		// The last i values are already sorted, so they can be skipped.
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j]! > arr[j + 1]!) {
				let temp = arr[j];
				arr[j] = arr[j + 1]!;
				arr[j + 1] = temp!;
				swapped = true;
			}
		}

		// No swaps means the remaining values are already in order.
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
