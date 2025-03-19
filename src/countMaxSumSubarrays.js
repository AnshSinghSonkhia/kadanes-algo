function countMaxSumSubarrays(arr) {
    let maxSum = -Infinity, currSum = 0, count = 0;

    for (let num of arr) {
        currSum = Math.max(num, currSum + num);
        if (currSum > maxSum) {
            maxSum = currSum;
            count = 1;
        } else if (currSum === maxSum) {
            count++;
        }
    }

    return count;
}

module.exports = countMaxSumSubarrays;
