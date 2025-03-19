const { maxSubarrayKConcatSum } = require("../src/maxSubarrayKConcatSum");

test("Finds max sum subarray in k concatenated copies", () => {
    expect(maxSubarrayKConcatSum([1, 2], 3)).toBe(9);
    expect(maxSubarrayKConcatSum([-1, 2, -3, 4], 2)).toBe(6);
    expect(maxSubarrayKConcatSum([-5, -1, -3], 5)).toBe(-1);
});
