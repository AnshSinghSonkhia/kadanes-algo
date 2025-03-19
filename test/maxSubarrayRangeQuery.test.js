const { maxSubarrayRangeQuery } = require("../src/maxSubarrayRangeQuery");

test("Finds the maximum subarray sum for given range queries", () => {
    expect(maxSubarrayRangeQuery([1, -2, 3, 4, -1, 2, -3], [{ l: 0, r: 6 }, { l: 2, r: 5 }]))
        .toEqual([8, 8]);

    expect(maxSubarrayRangeQuery([3, -1, 4, -1, 2, -4, 2, 3], [{ l: 1, r: 4 }, { l: 3, r: 7 }]))
        .toEqual([5, 5]);

    expect(maxSubarrayRangeQuery([-2, -3, -1, -5, -4], [{ l: 1, r: 3 }]))
        .toEqual([-1]);
});
