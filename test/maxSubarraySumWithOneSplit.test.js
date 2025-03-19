const { maxSubarraySumWithOneSplit } = require("../src/maxSubarraySumWithOneSplit");

test("Finds max sum allowing one split", () => {
    expect(maxSubarraySumWithOneSplit([1, 2, -1, 3, 4])).toBe(10);
    expect(maxSubarraySumWithOneSplit([-1, 2, -3, 4])).toBe(6);
    expect(maxSubarraySumWithOneSplit([-5, -1, -3])).toBe(-1);
});

test("Handles arrays with all positive numbers", () => {
    expect(maxSubarraySumWithOneSplit([1, 2, 3, 4, 5])).toBe(15);
    expect(maxSubarraySumWithOneSplit([10, 20, 30, 40])).toBe(100);
});

test("Handles arrays with all negative numbers", () => {
    expect(maxSubarraySumWithOneSplit([-1, -2, -3, -4])).toBe(-1);
    expect(maxSubarraySumWithOneSplit([-10, -20, -30, -40])).toBe(-10);
});

test("Handles arrays with mixed positive and negative numbers", () => {
    expect(maxSubarraySumWithOneSplit([3, -2, 5, -1, 2])).toBe(9);
    expect(maxSubarraySumWithOneSplit([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(10);
});

test("Handles arrays with single element", () => {
    expect(maxSubarraySumWithOneSplit([5])).toBe(5);
    expect(maxSubarraySumWithOneSplit([-5])).toBe(-5);
});

test("Handles arrays with two elements", () => {
    expect(maxSubarraySumWithOneSplit([1, -1])).toBe(1);
    expect(maxSubarraySumWithOneSplit([-1, 1])).toBe(1);
});
