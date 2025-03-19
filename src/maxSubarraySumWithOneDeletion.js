function maxSubarraySumWithOneDeletion(arr) {
    if (arr.length === 0) return 0;

    let maxSum = arr[0];
    let maxEndingHere = arr[0];
    let maxEndingHereWithOneDeletion = 0;
    let maxWithoutDeletion = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxEndingHereWithOneDeletion = Math.max(maxWithoutDeletion, maxEndingHereWithOneDeletion + arr[i]);
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxWithoutDeletion = maxEndingHere;
        maxSum = Math.max(maxSum, maxEndingHere, maxEndingHereWithOneDeletion);
    }

    return maxSum;
}

module.exports = { maxSubarraySumWithOneDeletion };
