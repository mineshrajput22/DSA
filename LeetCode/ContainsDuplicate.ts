function containDuplicate(arr: number[]): boolean {
	const mySet = new Set();

	for (let i = 0; i < arr.length; i++) {
		if (mySet.has(arr[i])) {
			return true;
		}

		mySet.add(arr[i]);
	}

	return false;
}

let nums = [1, 3, 4, 1];
console.log(containDuplicate(nums));
