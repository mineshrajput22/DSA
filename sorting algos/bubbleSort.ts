/**
 * Bubble Sort Algorithm
 * 
 * Definition: A simple sorting algorithm that repeatedly steps through the list, 
 * compares adjacent elements and swaps them if they are in the wrong order.
 * 
 * How it works:
 * The pass through the list is repeated until the list is sorted. With each pass,
 * the largest unsorted element "bubbles up" to its correct position at the end of the array.
 */
function bubbleSort(arr: number[]): number[] {
	// Outer loop handles the number of passes. In the worst case, we need arr.length passes.
	for (let i = 0; i < arr.length; i++) {
		// Keep track of whether any swaps happened in this pass.
		// If no swaps occur, the array is already sorted, and we can stop early.
		let swapped = false;
		
		// Inner loop performs the actual comparisons and swaps.
		// After each pass 'i', the last 'i' elements are already in their correct sorted positions,
		// so we only need to iterate up to arr.length - i - 1.
		for (let j = 0; j < arr.length - i - 1; j++) {
			// Compare adjacent elements: if the current element is greater than the next, swap them.
			if (arr[j]! > arr[j + 1]!) {
				let temp = arr[j];
				arr[j] = arr[j + 1]!;
				arr[j + 1] = temp!;
				swapped = true;
			}
		}

		// Optimization: If no elements were swapped during the inner loop, 
		// it means the array is completely sorted. We can break out of the outer loop.
		if (!swapped) {
			break;
		}
	}

	// Return the sorted array.
	return arr;
}

const unsortedArray = [
	38, 27, 43, 3, 9, 82, 10, 19, 54, 2, 70, 31, 16, 5, 68, 23, 91, 12, 45, 60,
];

console.log('Input:', unsortedArray);
console.log('Result:', bubbleSort(unsortedArray));
