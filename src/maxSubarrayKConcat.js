const maxSubarraySum = require("./maxSubarraySum");

function maxSubarrayKConcat(arr, k) {
  const kadaneSum = maxSubarraySum(arr);
  if (k === 1) return kadaneSum;

  const totalSum = arr.reduce((sum, num) => sum + num, 0);
  // Compute maximum subarray sum for the array concatenated twice
  const doubleKadane = maxSubarraySum([...arr, ...arr]);
  
  if (totalSum > 0) {
    // When total sum is positive, adding extra copies improves the result.
    return Math.max(doubleKadane, kadaneSum + (k - 1) * totalSum);
  }
  return doubleKadane;
}

module.exports = maxSubarrayKConcat;
