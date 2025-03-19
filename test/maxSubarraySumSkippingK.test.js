const { maxSubarraySumSkippingK } = require("../src/maxSubarraySumSkippingK");

test("Finds the max sum while skipping every k-th element", () => {
    expect(maxSubarraySumSkippingK([3, 2, 7, 10], 2)).toBe(7);
});

test("Finds the max sum while skipping every k-th element", () => {
    expect(maxSubarraySumSkippingK([1, 2, 3, 4, 5], 3)).toBe(7);
});

test("Finds the max sum while skipping every k-th element", () => {
    expect(maxSubarraySumSkippingK([5, -1, 2, 10, -3, 7], 2)).toBe(5);
});
