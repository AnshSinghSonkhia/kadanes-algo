function maxSubarraySumWithOneSplit(arr) {
    let maxSum = kadane(arr);

    for (let i = 0; i < arr.length - 1; i++) {
        let splitSum = kadane([...arr.slice(0, i + 1), ...arr.slice(i + 2)]);
        maxSum = Math.max(maxSum, splitSum);
    }

    return maxSum;
}

function kadane(arr) {
    let maxSum = -Infinity, currSum = 0;

    for (let num of arr) {
        currSum = Math.max(num, currSum + num);
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}

module.exports = { maxSubarraySumWithOneSplit };
