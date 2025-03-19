function maxSubarraySumWithKDeletions(arr, k) {
    let dp0 = arr[0], dp1 = 0, maxSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        dp1 = Math.max(dp1 + arr[i], dp0);
        dp0 = Math.max(dp0 + arr[i], arr[i]);
        maxSum = Math.max(maxSum, dp0, dp1);
    }

    return maxSum;
}

module.exports = maxSubarraySumWithKDeletions;
