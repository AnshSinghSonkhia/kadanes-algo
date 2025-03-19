const { maxSubarraySumInRotatedArray } = require("../src/maxSubarraySumInRotatedArray");

test("Finds the max subarray sum in a rotated array", () => {
    expect(maxSubarraySumInRotatedArray([8, -1, 3, 4])).toBe(15);
    expect(maxSubarraySumInRotatedArray([-2, -3, -1])).toBe(0);
    expect(maxSubarraySumInRotatedArray([5, -3, 5])).toBe(10);
});
