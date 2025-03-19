function maxSubarraySum(arr) {
    let maxSum = -Infinity, currentSum = 0;
    for (let num of arr) {
      currentSum = Math.max(num, currentSum + num);
      maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
  }
  
  module.exports = maxSubarraySum;
  