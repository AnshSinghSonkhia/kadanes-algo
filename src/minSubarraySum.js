function minSubarraySum(arr) {
    // Standard algorithm for minimum subarray sum using Kadane’s idea
    let currentMin = arr[0];
    let minSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
      currentMin = Math.min(arr[i], currentMin + arr[i]);
      minSum = Math.min(minSum, currentMin);
    }
    return minSum;
  }
  
  module.exports = minSubarraySum;
  