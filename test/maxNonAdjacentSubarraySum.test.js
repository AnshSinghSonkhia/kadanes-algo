const { maxNonAdjacentSubarraySum } = require("../src/maxNonAdjacentSubarraySum");

test("Finds the maximum sum of non-adjacent elements", () => {
    expect(maxNonAdjacentSubarraySum([3, 2, 5, 10, 7])).toBe(15); 
    expect(maxNonAdjacentSubarraySum([3, 2, 7, 10])).toBe(13);
    expect(maxNonAdjacentSubarraySum([-2, -3, -1])).toBe(0);
    expect(maxNonAdjacentSubarraySum([1, 2, 3, 4, 5, 6])).toBe(12);
});
