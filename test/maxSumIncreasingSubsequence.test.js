const { maxSumIncreasingSubsequence } = require("../src/maxSumIncreasingSubsequence");

test("Finds max sum of increasing subsequence", () => {
    expect(maxSumIncreasingSubsequence([1, 101, 2, 3, 100, 4, 5])).toBe(106);
    expect(maxSumIncreasingSubsequence([3, 4, 5, 10])).toBe(22);
    expect(maxSumIncreasingSubsequence([10, 5, 4, 3])).toBe(10);
});
