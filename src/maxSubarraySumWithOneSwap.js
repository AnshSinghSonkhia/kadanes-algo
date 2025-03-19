function maxSubarraySumWithOneSwap(arr) {
    let maxSum = arr[0], currSum = arr[0];
    let bestSwap = arr[0], swapUsed = false;

    for (let i = 1; i < arr.length; i++) {
        if (!swapUsed) {
            let potentialSwap = bestSwap + arr[i];
            if (potentialSwap > currSum) {
                currSum = potentialSwap;
                swapUsed = true;
            }
        }

        currSum = Math.max(arr[i], currSum + arr[i]);
        bestSwap = Math.max(bestSwap, currSum);
        maxSum = Math.max(maxSum, bestSwap);
    }

    return maxSum;
}

module.exports = maxSubarraySumWithOneSwap;
