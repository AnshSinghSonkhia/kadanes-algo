function maxBinarySubarraySum(arr) {
    let maxSum = 0, currSum = 0;

    for (let num of arr) {
        currSum = Math.max(num, currSum + num);
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}

module.exports = { maxBinarySubarraySum };
