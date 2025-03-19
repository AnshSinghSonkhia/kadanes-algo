function maxSumIncreasingSubsequence(arr) {
    let dp = [...arr];
    let maxSum = Math.max(...dp);

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + arr[i]);
            }
        }
        maxSum = Math.max(maxSum, dp[i]);
    }

    return maxSum;
}

module.exports = maxSumIncreasingSubsequence;
