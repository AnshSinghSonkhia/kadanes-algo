function maxSubarraySumInRotatedArray(arr) {
    function kadane(arr) {
        let maxSum = arr[0], currSum = arr[0];
        for (let i = 1; i < arr.length; i++) {
            currSum = Math.max(arr[i], currSum + arr[i]);
            maxSum = Math.max(maxSum, currSum);
        }
        return maxSum;
    }

    let maxKadane = kadane(arr);
    let totalSum = arr.reduce((a, b) => a + b, 0);
    let minKadane = kadane(arr.map(x => -x));

    return Math.max(maxKadane, totalSum + minKadane);
}

module.exports = { maxSubarraySumInRotatedArray };
