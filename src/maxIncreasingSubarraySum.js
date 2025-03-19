function maxIncreasingSubarraySum(arr) {
    if (arr.length === 0) return 0;

    let maxSum = arr[0], currSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            currSum += arr[i];
        } else {
            currSum = arr[i];
        }
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}

module.exports = { maxIncreasingSubarraySum };
