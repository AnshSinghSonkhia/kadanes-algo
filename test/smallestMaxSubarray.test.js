const { smallestMaxSubarray } = require("../src/smallestMaxSubarray");

test("Finds the lexicographically smallest subarray with maximum sum", () => {
    expect(smallestMaxSubarray([1, 2, -1, 2, 3, -2, 3])).toEqual([1, 2, -1, 2, 3, -2, 3]); // Max sum subarray
    expect(smallestMaxSubarray([-1, -2, -3, -4])).toEqual([-1]); // Only one element is possible
    expect(smallestMaxSubarray([3, -1, 4, -1, 2, -4, 2, 3])).toEqual([3, -1, 4, -1, 2, -4, 2, 3]); // Fixing expected result
    expect(smallestMaxSubarray([2, 2, 2, -1, 2, 2, 2])).toEqual([2, 2, 2, -1, 2, 2, 2]); // Unique max subarray
    expect(smallestMaxSubarray([5, -2, 1, 2, -1, 6])).toEqual([5, -2, 1, 2, -1, 6]); // Already lexicographically smallest
});
