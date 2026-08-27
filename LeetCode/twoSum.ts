function twoSum(arr: number[], target: number) {
	const seen = new Map();

	for (let i = 0; i < arr.length; i++) {
		const needed = target - arr[i]!;

		if (seen.has(needed)) {
			return [seen.get(needed), i];
		}

		seen.set(arr[i], i);
	}
}

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));
