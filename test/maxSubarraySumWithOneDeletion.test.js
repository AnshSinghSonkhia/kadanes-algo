const { maxSubarraySumWithOneDeletion } = require("../src/maxSubarraySumWithOneDeletion");

test("Finds the maximum subarray sum with at most one element deletion", () => {
    expect(maxSubarraySumWithOneDeletion([1, -2, 3, 4, -1, 2, -3])).toBe(9);
    expect(maxSubarraySumWithOneDeletion([-1, -2, -3, -4])).toBe(-1);  // -1 (single element)
    expect(maxSubarraySumWithOneDeletion([10, -10, 10, -10, 10])).toBe(20);
    expect(maxSubarraySumWithOneDeletion([-2, -3, -1, -5, -4])).toBe(-1);
    expect(maxSubarraySumWithOneDeletion([5, -1, -1, -1, 6])).toBe(9);
});
