const getResult = (arr) => {
    if (!Array.isArray(arr) || arr.length < 3) {
        return "Invalid variable"
    }

    const lengthMap = new Map();
    arr.forEach(str => {
        lengthMap.set(str.length, (lengthMap.get(str.length) || 0) + 1)
    }
    )

    const maxFrequency = Math.max(...lengthMap.values());
    let arrLengths = [];
    for (let [key, value] of lengthMap.entries()) {
        if (value === maxFrequency) {
            arrLengths.push(key);
        }
    }



    let arrResult = [];
    arr.forEach(str => {
        if (arrLengths.includes(str.length)) {
            arrResult.push(str);
        }
    });

    return arrResult;
}

console.log(getResult(['a', 'ab', 'abc', 'cd', 'def', 'gh', 'def']));
console.log(getResult(['hello', 'world', 'hi', 'hey', 'python']));
console.log(getResult(['abcd', 'efgh', 'ijkl', 'mnop', 'qrst'])); 
