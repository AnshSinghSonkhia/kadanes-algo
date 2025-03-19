const { maxEvenOddSubarraySum } = require("../src/maxEvenOddSubarraySum");

test("Finds the max sum of a contiguous subarray where elements alternate between even and odd", () => {
    expect(maxEvenOddSubarraySum([1, 2, 3, 4, 5, 6])).toBe(21);  // 1 + 2 + 3 + 4 + 5 + 6
    expect(maxEvenOddSubarraySum([10, 1, 2, 3, 4, 5, 6, 7])).toBe(38); 
    expect(maxEvenOddSubarraySum([2, 4, 6, 8])).toBe(8); // Only the biggest element is considered
    expect(maxEvenOddSubarraySum([1, 3, 5, 7, 9, 11])).toBe(11); // Only the biggest element is considered
    expect(maxEvenOddSubarraySum([2, 1, 4, 3, 6, 5, 8, 7])).toBe(36); // 2 + 1 + 4 + 3 + 6 + 5 + 8 + 7
});
