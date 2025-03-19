const longestPositiveSubarray = require("../src/longestPositiveSubarray");

test("Finds the longest positive sum subarray", () => {
  expect(longestPositiveSubarray([3, -4, 2, -3, -1, 7, -5])).toEqual([7]);
  expect(longestPositiveSubarray([1, 2, -1, 3, 4])).toEqual([1, 2, -1, 3, 4]);
  expect(longestPositiveSubarray([-1, -2, -3, -4])).toEqual([]);
});
