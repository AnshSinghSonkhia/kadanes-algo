const { maxBinarySubarraySum } = require("../src/maxBinarySubarraySum");

test("Finds max sum in a binary array", () => {
    expect(maxBinarySubarraySum([0, 1, 1, 0, 1, 1, 1, 0])).toBe(5);
    expect(maxBinarySubarraySum([1, 1, 1, 1, 1])).toBe(5);
    expect(maxBinarySubarraySum([0, 0, 0, 0])).toBe(0);
});

test("Handles arrays with alternating values", () => {
    expect(maxBinarySubarraySum([1, 0, 1, 0, 1, 0, 1, 0])).toBe(4);
    expect(maxBinarySubarraySum([0, 1, 0, 1, 0, 1, 0, 1])).toBe(4);
});

test("Handles arrays with single element", () => {
    expect(maxBinarySubarraySum([1])).toBe(1);
    expect(maxBinarySubarraySum([0])).toBe(0);
});

test("Handles empty array", () => {
    expect(maxBinarySubarraySum([])).toBe(0);
});

test("Handles arrays with all ones or all zeros", () => {
    expect(maxBinarySubarraySum([1, 1, 1, 1, 1, 1, 1, 1])).toBe(8);
    expect(maxBinarySubarraySum([0, 0, 0, 0, 0, 0, 0, 0])).toBe(0);
});
