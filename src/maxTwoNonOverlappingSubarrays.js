function maxTwoNonOverlappingSubarrays(arr, firstLen, secondLen) {
    function maxSubarray(arr, len) {
        let sum = 0, maxSum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            if (i >= len) sum -= arr[i - len];
            if (i >= len - 1) maxSum = Math.max(maxSum, sum);
        }
        return maxSum;
    }

    let max1 = maxSubarray(arr, firstLen);
    let max2 = maxSubarray(arr, secondLen);

    let totalMax = 0;
    for (let i = 0; i <= arr.length - firstLen; i++) {
        let firstSubarray = arr.slice(i, i + firstLen);
        let remaining = [...arr.slice(0, i), ...arr.slice(i + firstLen)];
        let secondMax = maxSubarray(remaining, secondLen);
        totalMax = Math.max(totalMax, firstSubarray.reduce((a, b) => a + b, 0) + secondMax);
    }

    return totalMax;
}

module.exports = { maxTwoNonOverlappingSubarrays };
