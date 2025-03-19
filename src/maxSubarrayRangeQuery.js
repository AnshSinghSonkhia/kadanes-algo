function maxSubarrayRangeQuery(arr, queries) {
    return queries.map(({ l, r }) => kadane(arr.slice(l, r + 1)));
}

function kadane(arr) {
    let maxSum = arr[0], currSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currSum = Math.max(arr[i], currSum + arr[i]);
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}

module.exports = maxSubarrayRangeQuery;
