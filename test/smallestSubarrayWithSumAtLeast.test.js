const smallestSubarrayWithSumAtLeast = require("../src/smallestSubarrayWithSumAtLeast");

test("Finds the smallest subarray with sum at least target", () => {
    expect(smallestSubarrayWithSumAtLeast([2, 3, 1, 2, 4, 3], 7)).toEqual([4, 3]);  // Smallest valid subarray
    expect(smallestSubarrayWithSumAtLeast([1, 4, 4], 4)).toEqual([4]);  // Single-element subarray
    expect(smallestSubarrayWithSumAtLeast([1, 1, 1, 1, 1, 1, 1, 1], 11)).toEqual([]);  // No valid subarray
    expect(smallestSubarrayWithSumAtLeast([1, 2, 3, 4, 5], 11)).toEqual([3, 4, 5]);  // Minimum subarray at end
    expect(smallestSubarrayWithSumAtLeast([3, -1, 4, -2, 2, 1, 6], 6)).toEqual([6]);  // Single number satisfies target
});
