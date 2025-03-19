const { maxSubarraySumModulo } = require("../src/maxSubarraySumModulo");

test("Finds the max sum subarray with modulo constraint", () => {
    expect(maxSubarraySumModulo([3, 3, 9, 9, 5], 7)).toBe(6);
    expect(maxSubarraySumModulo([1, 2, 3, 4], 5)).toBe(4);
    expect(maxSubarraySumModulo([10, 20, 30], 7)).toBe(6);
});
