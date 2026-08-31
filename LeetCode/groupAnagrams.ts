function groupAnagrams(strs: string[]) {
	const map = new Map();

	for (const str of strs) {
		const key = str.split('').sort().join('');

		if (!map.has(key)) {
			map.set(key, []);
		}

		map.get(key).push(str);
	}

	return Array.from(map.values());
}

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

console.log(groupAnagrams(strs));
