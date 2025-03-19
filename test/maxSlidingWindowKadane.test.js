const { maxSlidingWindowKadane } = require("../src/maxSlidingWindowKadane");

test("Finds max subarray sum within sliding window", () => {
    expect(maxSlidingWindowKadane([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3, -1, 1, 5, 14, 16]);
});

test("Finds max subarray sum within sliding window", () => {
    expect(maxSlidingWindowKadane([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3, -1, 1, 5, 14, 16]);
    expect(maxSlidingWindowKadane([2, 3, 4, 1, 5], 4)).toEqual([10, 13]);
});

test("Handles window size larger than array length", () => {
    expect(maxSlidingWindowKadane([1, 2, 3], 5)).toEqual([]);
});

test("Handles single element array", () => {
    expect(maxSlidingWindowKadane([5], 1)).toEqual([5]);
});

test("Handles window size of 1", () => {
    expect(maxSlidingWindowKadane([1, 2, 3, 4, 5], 1)).toEqual([1, 2, 3, 4, 5]);
});

test("Handles empty array", () => {
    expect(maxSlidingWindowKadane([], 3)).toEqual([]);
});

test("Handles negative numbers", () => {
    expect(maxSlidingWindowKadane([-1, -2, -3, -4], 2)).toEqual([-3, -5, -7]);
});
