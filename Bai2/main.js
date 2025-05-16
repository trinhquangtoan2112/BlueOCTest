const getSum = (arr) => {
    if (!Array.isArray(arr) || arr.length < 2) {
        return "Invalid variable"
    }
    arr = arr.sort((a, b) => a - b);
    return arr[arr.length - 1] + arr[arr.length - 2];


}



console.log(getSum([1, 4, 2, 3, 5]));
console.log(getSum([10, 20, 5, 8]));
console.log(getSum([-1, -5, -3, -2]));
console.log(getSum([100]));
