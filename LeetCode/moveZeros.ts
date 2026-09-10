function moveZeros(nums: number[]) {
	let l = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			let temp = nums[l];
			nums[l] = nums[i]!;
			nums[i] = temp!;

			l++;
		}
	}

	return nums;
}

const numbers = [0, 1, 0, 3, 12];

console.log(moveZeros(numbers));
