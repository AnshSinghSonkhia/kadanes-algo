const { maxSubarraySumWithKDeletions } = require("../src/maxSubarraySumWithKDeletions");

test("Finds the max sum subarray with at most K deletions", () => {
    expect(maxSubarraySumWithKDeletions([1, -2, 0, 3], 1)).toBe(4);
    expect(maxSubarraySumWithKDeletions([-1, -1, -1], 2)).toBe(-1);
    expect(maxSubarraySumWithKDeletions([10, -10, 10, -10, 10], 2)).toBe(20);
});
