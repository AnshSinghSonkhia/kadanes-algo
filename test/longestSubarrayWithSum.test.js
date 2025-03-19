const { longestSubarrayWithSum } = require("../src/longestSubarrayWithSum");

test("Finds the longest subarray with sum equal to target", () => {
    expect(longestSubarrayWithSum([1, 2, 3, 7, 5], 12)).toEqual([2, 3, 7]);
    expect(longestSubarrayWithSum([4, 1, 1, 1, 2, 3, 5], 5)).toEqual([1, 1, 1, 2]);
    expect(longestSubarrayWithSum([10, 2, -2, -20, 10], -10)).toEqual([10, 2, -2, -20]);
});
