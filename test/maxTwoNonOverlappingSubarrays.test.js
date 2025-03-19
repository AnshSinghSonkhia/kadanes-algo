const { maxTwoNonOverlappingSubarrays } = require("../src/maxTwoNonOverlappingSubarrays");

test("Finds the max sum of two non-overlapping subarrays", () => {
    expect(maxTwoNonOverlappingSubarrays([3, 8, 1, 5, 2, 10, 6], 2, 3)).toBe(30);
    expect(maxTwoNonOverlappingSubarrays([1, 2, 3, 4, 5, 6], 2, 2)).toBe(18);
    expect(maxTwoNonOverlappingSubarrays([10, 5, 2, 6, 8, 1], 3, 2)).toBe(31);
});
