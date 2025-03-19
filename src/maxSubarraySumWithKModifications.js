function maxSubarraySumWithKModifications(arr, k, val) {
    let maxSum = arr[0], currSum = arr[0];
    let modified = 0;

    for (let i = 1; i < arr.length; i++) {
        let potential = modified < k ? currSum + val : currSum + arr[i];
        currSum = Math.max(arr[i], currSum + arr[i], potential);
        if (modified < k && currSum === potential) modified++;
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}

module.exports = maxSubarraySumWithKModifications;
