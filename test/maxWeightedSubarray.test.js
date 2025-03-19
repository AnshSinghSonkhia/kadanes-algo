const { maxWeightedSubarray } = require("../src/maxWeightedSubarray");

test("Finds the max weighted sum subarray", () => {
    expect(maxWeightedSubarray([1, 2, 3, 4], [1, 2, 1, 3])).toBe(20); // (1*1 + 2*2 + 3*1 + 4*3) = (1 + 4 + 3 + 12) = 20
    expect(maxWeightedSubarray([-1, -2, -3, -4], [1, 1, 1, 1])).toBe(-1); // Best is [-1]
    expect(maxWeightedSubarray([2, -1, 3, -2, 4], [1, 2, 1, 2, 1])).toBe(4); // Best subarray is [2, -1, 3]
    expect(maxWeightedSubarray([0, 0, 0, 0], [1, 2, 3, 4])).toBe(0); // All elements are zero
    expect(maxWeightedSubarray([3, -2, 5, -1, 6], [2, 3, 1, 2, 1])).toBe(9); 
});
