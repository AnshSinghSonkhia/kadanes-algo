const { maxSubarraySumWithOneSwap } = require("../src/maxSubarraySumWithOneSwap");

test("Finds the max sum subarray with at most one swap", () => {
    expect(maxSubarraySumWithOneSwap([1, 2, -1, 3, -2])).toBe(7);
    expect(maxSubarraySumWithOneSwap([-1, -2, -3, -4])).toBe(-1);
    expect(maxSubarraySumWithOneSwap([10, -10, 10, -10, 10])).toBe(30);
});
