const maxSubarrayKConcat = require("../src/maxSubarrayKConcat");

describe("maxSubarrayKConcat", () => {
  test("should work for small positive arrays", () => {
    // Single copy: [1,2] => kadane = 3, total = 3
    // For k=3: answer = 3 + (3-1)*3 = 9
    expect(maxSubarrayKConcat([1, 2], 3)).toBe(9);
  });

  test("should work for all-negative arrays", () => {
    // For [-1,-2,-3] with any k, the maximum subarray is the largest element.
    expect(maxSubarrayKConcat([-1, -2, -3], 5)).toBe(-1);
  });

  test("should work for mixed array with k=2", () => {
    // For [10, -3, 4, -1]:
    // kadaneSum = 11 (from [10, -3, 4]), totalSum = 10,
    // Double array maximum = 21, and candidate using extra copy = 11 + 10 = 21.
    expect(maxSubarrayKConcat([10, -3, 4, -1], 2)).toBe(21);
  });

  test("should work for a single element array", () => {
    // For [5]: kadane = 5, total = 5.
    // k=1 => 5; k=2 => 5 + 5 = 10; k=3 => 5 + 2*5 = 15.
    expect(maxSubarrayKConcat([5], 1)).toBe(5);
    expect(maxSubarrayKConcat([5], 2)).toBe(10);
    expect(maxSubarrayKConcat([5], 3)).toBe(15);
  });

  test("should work when array contains zeros and negatives", () => {
    // For [-1, 0, -2]:
    // Kadane picks 0 (since 0 > -1 and 0 > (-1+0)); total = -3.
    // So answer should be 0.
    expect(maxSubarrayKConcat([-1, 0, -2], 3)).toBe(0);
  });

  test("should work for a larger mixed array", () => {
    // For [2, -1, 2, 3, -4, 5]:
    // Single kadane = 7, total = 7.
    // For k=4: candidate = 7 + 3*7 = 28, double concatenation gives 14.
    expect(maxSubarrayKConcat([2, -1, 2, 3, -4, 5], 4)).toBe(28);
  });
});
