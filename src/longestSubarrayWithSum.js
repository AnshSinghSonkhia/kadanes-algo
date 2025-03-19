function longestSubarrayWithSum(arr, target) {
    let sumMap = new Map();
    let sum = 0, maxLength = 0, startIdx = -1;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum === target) {
            maxLength = i + 1;
            startIdx = 0;
        }

        if (!sumMap.has(sum)) {
            sumMap.set(sum, i);
        }

        if (sumMap.has(sum - target)) {
            let prevIdx = sumMap.get(sum - target);
            if (i - prevIdx > maxLength) {
                maxLength = i - prevIdx;
                startIdx = prevIdx + 1;
            }
        }
    }

    return startIdx !== -1 ? arr.slice(startIdx, startIdx + maxLength) : [];
}

module.exports = longestSubarrayWithSum;
