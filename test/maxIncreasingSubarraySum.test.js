const { maxIncreasingSubarraySum } = require("../src/maxIncreasingSubarraySum");

test("Finds the max sum of a strictly increasing subarray", () => {
    expect(maxIncreasingSubarraySum([1, 2, 3, 1, 5, 6, 7])).toBe(19);
    expect(maxIncreasingSubarraySum([10, 20, 30, 5, 6, 7])).toBe(60);
    expect(maxIncreasingSubarraySum([5, 1, 2, 3, 4, 1, 6])).toBe(10);
    expect(maxIncreasingSubarraySum([3, 2, 1])).toBe(3);
});
