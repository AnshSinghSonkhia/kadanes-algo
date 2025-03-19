function maxSubarrayWithDistinctElements(arr) {
    let maxSum = 0, currentSum = 0;
    let seen = new Set();
    let left = 0;

    for (let right = 0; right < arr.length; right++) {
        while (seen.has(arr[right])) {
            seen.delete(arr[left]);
            currentSum -= arr[left];
            left++;
        }
        seen.add(arr[right]);
        currentSum += arr[right];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

module.exports = maxSubarrayWithDistinctElements;
