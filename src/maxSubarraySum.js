function maxSubarraySum(arr) {
    // Standard Kadane’s algorithm for maximum subarray sum
    let maxSum = arr[0];
    let currentSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
      currentSum = Math.max(arr[i], currentSum + arr[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
  }
  
module.exports = maxSubarraySum;