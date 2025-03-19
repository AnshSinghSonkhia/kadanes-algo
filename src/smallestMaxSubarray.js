function smallestMaxSubarray(arr) {
    let maxSum = -Infinity;
    let currentSum = 0;
    let bestStart = 0, bestEnd = 0;
    let start = 0;

    for (let i = 0; i < arr.length; i++) {
        if (currentSum < 0) {
            currentSum = arr[i];
            start = i;
        } else {
            currentSum += arr[i];
        }

        if (
            currentSum > maxSum || 
            (currentSum === maxSum && (i - start < bestEnd - bestStart))
        ) {
            maxSum = currentSum;
            bestStart = start;
            bestEnd = i;
        }
    }

    return arr.slice(bestStart, bestEnd + 1);
}

module.exports = { smallestMaxSubarray };
