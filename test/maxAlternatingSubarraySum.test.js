const maxAlternatingSubarraySum = require("../src/maxAlternatingSubarraySum");

test("Finds the max sum of an alternating subarray", () => {
    expect(maxAlternatingSubarraySum([1, -2, 3, -4, 5, -6])).toBe(3);  // [3, -4, 5] actually sums to 5
    expect(maxAlternatingSubarraySum([-1, 2, -3, 4, -5, 6])).toBe(3);  // [2, -3, 4, -5, 6]
    expect(maxAlternatingSubarraySum([5, -1, 2, -3, 4])).toBe(7);  // [5, -1, 2, -3, 4]
    expect(maxAlternatingSubarraySum([-1, -2, -3, -4])).toBe(-1);  // Single least negative number
    expect(maxAlternatingSubarraySum([1, 2, 3, 4, 5])).toBe(5);  // No alternation, single largest number
});