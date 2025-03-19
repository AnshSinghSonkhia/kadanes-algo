const maxSubarraySum = require("./maxSubarraySum");

function maxCircularSubarraySum(arr) {
  let maxKadane = maxSubarraySum(arr);
  let totalSum = arr.reduce((sum, num) => sum + num, 0);
  let minKadane = maxSubarraySum(arr.map(num => -num));
  
  if (totalSum + minKadane === 0) return maxKadane; // Handles all negative case
  return Math.max(maxKadane, totalSum + minKadane);
}

module.exports = maxCircularSubarraySum;
