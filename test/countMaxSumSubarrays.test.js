const { countMaxSumSubarrays } = require("../src/countMaxSumSubarrays");

test("Counts the number of max sum subarrays", () => {
    expect(countMaxSumSubarrays([1, 2, -1, 2, 3, -5, 4])).toBe(1);
    expect(countMaxSumSubarrays([-1, -2, -3, -4])).toBe(1);
    expect(countMaxSumSubarrays([4, -1, 2, 1])).toBe(1);
});
