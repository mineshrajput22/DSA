function validAnagram(string: string, target: string) {
	if (string.length !== target.length) {
		return false;
	}
	const stringMap = new Map();
	const targetMap = new Map();

	for (let i = 0; i < string.length; i++) {
		stringMap.set(string[i]!, (stringMap.get(string[i]) || 0) + 1);
		targetMap.set(target[i]!, (targetMap.get(target[i]) || 0) + 1);
	}

	for (const [char, count] of stringMap) {
		if (targetMap.get(char) !== count) {
			return false;
		}
	}

	return true;
}

console.log(validAnagram('anagram', 'nagaram'));
