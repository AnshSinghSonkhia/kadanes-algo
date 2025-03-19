const minSubarraySum = require("../src/minSubarraySum");

describe("minSubarraySum", () => {
  test("should return correct minimum for mixed array", () => {
    // For [3, -4, 2, -3, -1, 7, -5]:
    // The minimum contiguous subarray is [-4, 2, -3, -1] = -6.
    expect(minSubarraySum([3, -4, 2, -3, -1, 7, -5])).toBe(-6);
  });

  test("should return correct value for all-positive array", () => {
    // For [1, 2, 3, 4, 5]: the minimum is the smallest element, 1.
    expect(minSubarraySum([1, 2, 3, 4, 5])).toBe(1);
  });

  test("should return correct value for all-negative array", () => {
    // For [-1, -2, -3, -4]: best (i.e., smallest sum) is the sum of all: -10.
    expect(minSubarraySum([-1, -2, -3, -4])).toBe(-10);
  });

  test("should work for a different mixed array", () => {
    // For array: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    // Running through the algorithm, we find that the minimum contiguous sum is -5.
    expect(minSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(-5);
  });

  test("should return the element itself for a single-element array", () => {
    expect(minSubarraySum([5])).toBe(5);
    expect(minSubarraySum([-5])).toBe(-5);
  });

  test("should work for arrays with zeros", () => {
    expect(minSubarraySum([0, 0, 0])).toBe(0);
    expect(minSubarraySum([0, -1, 0])).toBe(-1);
  });

  test("should work for another mixed array", () => {
    // For [-3, 1, -2, 5, -3, 2, -8, 4]:
    // Let's compute manually:
    // currentMin starts at -3, then becomes -2, then -4, then resets to 1, etc.
    // The minimum found is -9.
    expect(minSubarraySum([-3, 1, -2, 5, -3, 2, -8, 4])).toBe(-9);
  });
});
