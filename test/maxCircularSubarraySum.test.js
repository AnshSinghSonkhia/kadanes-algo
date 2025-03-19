const maxCircularSubarraySum = require("../src/maxCircularSubarraySum");

test("Finds the max sum circular subarray", () => {
  expect(maxCircularSubarraySum([8, -8, 9, -9, 10, -11, 12])).toBe(22);
  expect(maxCircularSubarraySum([10, -3, -4, 7, 6, 5, -4, -1])).toBe(23);
  expect(maxCircularSubarraySum([-1, -2, -3, -4])).toBe(-1);
});
