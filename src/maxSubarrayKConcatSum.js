function maxSubarrayKConcatSum(arr, k) {
    if (k === 1) return kadane(arr);

    let totalSum = arr.reduce((sum, num) => sum + num, 0);
    let maxKadaneDouble = kadane([...arr, ...arr]);

    return totalSum > 0 ? maxKadaneDouble + (k - 2) * totalSum : maxKadaneDouble;
}

function kadane(arr) {
    let maxSum = -Infinity, currSum = 0;

    for (let num of arr) {
        currSum = Math.max(num, currSum + num);
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}

module.exports = maxSubarrayKConcatSum;
