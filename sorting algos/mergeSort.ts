/**
 * Merge Sort Algorithm
 * 
 * Definition: An efficient, general-purpose, and comparison-based sorting algorithm.
 * It is a divide-and-conquer algorithm that relies on dividing the array into smaller, 
 * more manageable pieces, sorting those pieces, and then merging them back together.
 * 
 * How it works:
 * 1. Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
 * 2. Repeatedly merge sublists to produce new sorted sublists until there is only one sorted list remaining.
 */
function mergeSort(arr: number[]): number[] {
	// Base case: Arrays with zero or one element are inherently already sorted.
	if (arr.length <= 1) {
		return arr;
	}

	// Divide phase: Find the middle index to split the array into two halves.
	const middle = Math.floor(arr.length / 2);
	
	// Create the left half of the array.
	const left = arr.slice(0, middle);
	
	// Create the right half of the array.
	const right = arr.slice(middle);

	// Conquer phase: Recursively call mergeSort on both halves, 
	// then combine the two sorted halves using the merge function.
	return merge(mergeSort(left), mergeSort(right));
}

/**
 * Helper function to merge two sorted arrays into a single sorted array.
 */
function merge(left: number[], right: number[]) {
	let result: number[] = [];
	let leftIndex = 0;
	let rightIndex = 0;

	// Compare the elements of both arrays one by one.
	// Take the smaller element and push it into the result array.
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex]! < right[rightIndex]!) {
			result.push(left[leftIndex]!);
			leftIndex++; // Move the pointer for the left array forward.
		} else {
			result.push(right[rightIndex]!);
			rightIndex++; // Move the pointer for the right array forward.
		}
	}

	// At this point, one of the arrays might still have remaining elements.
	// Since both input arrays are already sorted, we can just concatenate the 
	// remaining elements from either the left or right array to the end of the result.
	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const unsortedArray = [
	38, 27, 43, 3, 9, 82, 10, 19, 54, 2, 70, 31, 16, 5, 68, 23, 91, 12, 45, 60,
];

console.log(mergeSort(unsortedArray));
