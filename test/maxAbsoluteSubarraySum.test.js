const maxAbsoluteSubarraySum = require("../src/maxAbsoluteSubarraySum");

test("Finds the max absolute subarray sum", () => {
  // For [3, -4, 2, -3, -1, 7, -5]:
  //   maxSubarraySum = 7 and minSubarraySum = -6, so the answer is max(7, 6) = 7.
  expect(maxAbsoluteSubarraySum([3, -4, 2, -3, -1, 7, -5])).toBe(7);
  expect(maxAbsoluteSubarraySum([1, 2, 3, 4, 5])).toBe(15);
  expect(maxAbsoluteSubarraySum([-1, -2, -3, -4])).toBe(10);
});
