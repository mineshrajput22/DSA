function topKFrequent(nums: number[], k: number) {
	const counter = new Map<number, number>();

	for (const num of nums) {
		counter.set(num, (counter.get(num) || 0) + 1);
	}

	const bucket: number[][] = Array.from(
		{
			length: nums.length + 1,
		},
		() => [],
	);

	for (const [num, frequency] of counter.entries()) {
		bucket[frequency]?.push(num);
	}

	const result: number[] = [];

	for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
		for (const num of bucket[i]!) {
			result.push(num);

			if (result.length === k) break;
		}
	}

	return result;
}

const nums = [1, 1, 1, 2, 2, 3];
let k = 2;

console.log(topKFrequent(nums, k));
