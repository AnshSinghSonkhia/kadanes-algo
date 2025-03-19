const { maxSubarrayReplacingNegatives } = require("../src/maxSubarrayReplacingNegatives");

test("Finds max sum after replacing negatives with zero", () => {
    expect(maxSubarrayReplacingNegatives([1, -2, 3, -4, 5])).toBe(9);
    expect(maxSubarrayReplacingNegatives([-5, -10, -1])).toBe(0);
    expect(maxSubarrayReplacingNegatives([3, 2, -7, 4])).toBe(9);
});
