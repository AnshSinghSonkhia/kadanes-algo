const maxSubarraySum = require("./maxSubarraySum");
const minSubarraySum = require("./minSubarraySum");

function maxAbsoluteSubarraySum(arr) {
  // Compute maximum subarray sum (largest positive sum)
  const posMax = maxSubarraySum(arr);
  // Compute minimum subarray sum (most negative sum)
  const negMin = minSubarraySum(arr);
  // Return the maximum between posMax and the absolute value of negMin.
  return Math.max(posMax, Math.abs(negMin));
}

module.exports = maxAbsoluteSubarraySum;
