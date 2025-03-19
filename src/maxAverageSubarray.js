function maxAverageSubarray(arr) {
    let maxSum = -Infinity, currentSum = 0;
    let bestStart = -1, bestEnd = -1;
    let tempStart = 0;

    for (let i = 0; i < arr.length; i++) {
        if (currentSum <= 0) {
            currentSum = arr[i];
            tempStart = i;
        } else {
            currentSum += arr[i];
        }

        let avg = currentSum / (i - tempStart + 1);
        let maxAvg = maxSum / (bestEnd - bestStart + 1);
        
        if (currentSum > maxSum || (avg > maxAvg)) {
            maxSum = currentSum;
            bestStart = tempStart;
            bestEnd = i;
        }
    }

    return { maxAvg: maxSum / (bestEnd - bestStart + 1), subarray: arr.slice(bestStart, bestEnd + 1) };
}

module.exports = { maxAverageSubarray };
