function maxSumPathBetweenIndices(arr, start, end) {
    if (start < 0 || end >= arr.length || start > end) return 0;

    let maxSum = arr[start], currSum = arr[start];

    for (let i = start + 1; i <= end; i++) {
        currSum = Math.max(arr[i], currSum + arr[i]);
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}

module.exports = { maxSumPathBetweenIndices };
