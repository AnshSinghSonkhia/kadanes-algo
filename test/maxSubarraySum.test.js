const maxSubarraySum = require("../src/maxSubarraySum");

test("Finds the max sum subarray", () => {
  expect(maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
  expect(maxSubarraySum([1,2,3,4,5])).toBe(15);
  expect(maxSubarraySum([-1,-2,-3,-4])).toBe(-1);
});
