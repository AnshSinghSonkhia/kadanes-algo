const { maxSubarrayWithDistinctElements } = require("../src/maxSubarrayWithDistinctElements");

test("Finds the max sum subarray with distinct elements", () => {
    expect(maxSubarrayWithDistinctElements([1, 2, 3, 1, 4, 5])).toBe(15);
    expect(maxSubarrayWithDistinctElements([1, 1, 1, 1, 1])).toBe(1);
    expect(maxSubarrayWithDistinctElements([4, 3, 5, 2, 1, 6])).toBe(21);
    expect(maxSubarrayWithDistinctElements([3, 2, 5, 2, 1, 6, 7, 8])).toBe(29);
});
