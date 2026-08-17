/**
 * Insertion Sort Algorithm
 * 
 * Definition: A sorting algorithm that builds the final sorted array one item at a time.
 * It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
 * 
 * How it works:
 * It iterates through the input array, consuming one input element each repetition, 
 * and grows a sorted output list. At each iteration, insertion sort removes one element 
 * from the input data, finds the location it belongs within the sorted list, and inserts it there.
 */
function insertionSort(arr: number[]): number[] {
	// Start iterating from the second element (index 1), assuming the first element (index 0) is already "sorted".
	for (let i = 1; i < arr.length; i++) {
		// Store the current element we are trying to position correctly.
		let currentElement = arr[i]!;
		
		// Initialize 'j' to point to the last element of the sorted portion of the array.
		let j = i - 1;

		// Move elements of the sorted portion that are greater than 'currentElement'
		// one position ahead of their current position to make room.
		while (j >= 0) {
			// If the element in the sorted portion is less than or equal to the current element,
			// it means we have found the correct position for 'currentElement', so we stop shifting.
			if (arr[j]! <= currentElement) {
				break;
			}

			// Shift the larger element to the right.
			arr[j + 1] = arr[j]!;
			
			// Move to the next element on the left in the sorted portion.
			j--;
		}

		// Insert 'currentElement' into its correct, sorted position.
		arr[j + 1] = currentElement;
	}

	// Return the sorted array.
	return arr;
}

const unsortedArray = [
	38, 27, 43, 3, 9, 82, 10, 19, 54, 2, 70, 31, 16, 5, 68, 23, 91, 12, 45, 60,
];

console.log('Input:', unsortedArray);
console.log('Result:', insertionSort(unsortedArray));
