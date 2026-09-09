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

function validAnagram2(string: string, target: string) {
	if (string.length !== target.length) {
		return false;
	}

	const charMap = new Map();

	for (let i = 0; i < string.length; i++) {
		charMap.set(string[i], (charMap.get(string[i]) || 0) + 1);
		charMap.set(target[i], (charMap.get(target[i]) || 0) - 1);
	}

	//if the are anagrams all the values will be zero
	for (const count of charMap.values()) {
		if (count !== 0) return false;
	}

	return true;
}

console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram2('anagram', 'nagaram'));
