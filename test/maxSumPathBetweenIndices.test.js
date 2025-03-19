const { maxSumPathBetweenIndices } = require("../src/maxSumPathBetweenIndices");

test("Finds the max sum subarray between two indices", () => {
    expect(maxSumPathBetweenIndices([1, 2, -5, 4, 6, -3, 5], 1, 5)).toBe(10);
    expect(maxSumPathBetweenIndices([3, -1, 4, -1, 2], 0, 4)).toBe(7);
    expect(maxSumPathBetweenIndices([-2, 1, -3, 4, -1, 2, 1, -5, 4], 3, 7)).toBe(6);
});
