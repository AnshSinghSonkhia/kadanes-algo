function maxSubarrayReplacingNegatives(arr) {
    return kadane(arr.map(num => (num < 0 ? 0 : num)));
}

function kadane(arr) {
    let maxSum = -Infinity, currSum = 0;

    for (let num of arr) {
        currSum = Math.max(num, currSum + num);
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}

module.exports = { maxSubarrayReplacingNegatives };
