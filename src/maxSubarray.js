function maxSubarray(arr) {
    let maxSum = -Infinity, currentSum = 0;
    let start = 0, end = 0, tempStart = 0;
    let bestSubarray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (currentSum <= 0) {
        currentSum = arr[i];
        tempStart = i;
      } else {
        currentSum += arr[i];
      }
  
      if (currentSum > maxSum) {
        maxSum = currentSum;
        start = tempStart;
        end = i;
      }
    }
  
    bestSubarray = arr.slice(start, end + 1);
    return { maxSum, subarray: bestSubarray };
  }
  
  module.exports = maxSubarray;
  