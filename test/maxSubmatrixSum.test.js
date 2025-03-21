const maxSubmatrixSum = require("../src/maxSubmatrixSum");

test("Finds the max sum submatrix", () => {
  expect(maxSubmatrixSum([
    [1, 2, -1, -4, -20],
    [-8, -3, 4, 2, 1],
    [3, 8, 10, 1, 3],
    [-4, -1, 1, 7, -6]
  ])).toBe(29);

  expect(maxSubmatrixSum([[1]])).toBe(1);
  expect(maxSubmatrixSum([[-1, -2], [-3, -4]])).toBe(-1);
});
