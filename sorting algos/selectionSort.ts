/**
 * Selection Sort Algorithm
 * 
 * Definition: An in-place comparison sorting algorithm. It has an O(n^2) time complexity, 
 * which makes it inefficient on large lists, and generally performs worse than the similar insertion sort.
 * 
 * How it works:
 * It divides the input list into two parts: a sorted sublist of items which is built up from left to right 
 * at the front (left) of the list and a sublist of the remaining unsorted items that occupy the rest of the list.
 * Initially, the sorted sublist is empty and the unsorted sublist is the entire input list.
 * The algorithm proceeds by finding the smallest element in the unsorted sublist, 
 * exchanging (swapping) it with the leftmost unsorted element, and moving the sublist boundaries one element to the right.
 */
function selectionSort(arr: number[]): number[] {
	// Iterate through the array. The loop goes up to the second-to-last element
	// because by the time we reach the last element, it will naturally be in its correct sorted position.
	for (let i = 0; i < arr.length - 1; i++) {
		// Assume the first unsorted element is the minimum.
		let minIndex = i;

		// Iterate through the rest of the unsorted portion of the array 
		// to find the actual minimum element.
		for (let j = i + 1; j < arr.length; j++) {
			// If we find a smaller element, update 'minIndex' to its index.
			if (arr[j]! < arr[minIndex]!) {
				minIndex = j;
			}
		}

		// After finding the smallest element in the unsorted portion, 
		// swap it with the first unsorted element (at index 'i').
		let temp = arr[minIndex];
		arr[minIndex] = arr[i]!;
		arr[i] = temp!;
	}

	// Return the sorted array.
	return arr;
}

const unsortedArray = [
	38, 27, 43, 3, 9, 82, 10, 19, 54, 2, 70, 31, 16, 5, 68, 23, 91, 12, 45, 60,
];

console.log('Input:', unsortedArray);
console.log('Result:', selectionSort(unsortedArray));
