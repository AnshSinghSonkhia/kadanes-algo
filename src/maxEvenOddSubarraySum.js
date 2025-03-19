function maxEvenOddSubarraySum(arr) {
    if (arr.length === 0) return 0;

    let maxSum = arr[0];
    let currSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if ((arr[i] % 2 === 0) !== (arr[i - 1] % 2 === 0)) {
            currSum += arr[i];  // Continue alternating sequence
        } else {
            currSum = arr[i];  // Reset sequence
        }

        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}

module.exports = { maxEvenOddSubarraySum };
