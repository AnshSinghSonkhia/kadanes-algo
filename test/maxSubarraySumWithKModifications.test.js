const { maxSubarraySumWithKModifications } = require("../src/maxSubarraySumWithKModifications");

test("Finds the max sum subarray with up to K modifications", () => {
    expect(maxSubarraySumWithKModifications([1, -2, 3, -4, 5], 2, 10)).toBe(22);
    expect(maxSubarraySumWithKModifications([-1, -2, -3], 1, 5)).toBe(4);
    expect(maxSubarraySumWithKModifications([2, -1, 3, -2, 4], 2, 2)).toBe(13);
});
