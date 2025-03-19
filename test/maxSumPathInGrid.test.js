const { maxSumPathInGrid } = require("../src/maxSumPathInGrid");

test("Finds the max sum path in a grid", () => {
    expect(maxSumPathInGrid([[1, 3, 1], [1, 5, 1], [4, 2, 1]])).toBe(12);
    expect(maxSumPathInGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toBe(29);
    expect(maxSumPathInGrid([[5, 3], [4, 1]])).toBe(10);
});
