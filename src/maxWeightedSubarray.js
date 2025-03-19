function maxWeightedSubarray(arr, weights) {
    if (arr.length !== weights.length) {
        throw new Error("The length of the array and weights must be the same.");
    }
    if (arr.length === 0) {
        return 0; // or another appropriate value
    }
    let maxSum = -Infinity;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let weightedValue = arr[i] * weights[i];

        if (currentSum < 0) {
            currentSum = weightedValue;
        } else {
            currentSum += weightedValue;
        }

        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

module.exports = { maxWeightedSubarray };
