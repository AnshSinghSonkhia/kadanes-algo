function maxAlternatingSubarraySum(arr) {
    if (arr.length === 0) return 0;

    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if ((arr[i] > 0 && arr[i - 1] < 0) || (arr[i] < 0 && arr[i - 1] > 0)) {
            currentSum += arr[i];
        } else {
            currentSum = arr[i];
        }
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

module.exports = maxAlternatingSubarraySum;
