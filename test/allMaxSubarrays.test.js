const allMaxSubarrays = require("../src/allMaxSubarrays");

test("Finds all subarrays with the maximum sum", () => {
    expect(allMaxSubarrays([1, 2, -1, 3, -2, 3, -1])).toEqual([[1, 2, -1, 3, -2, 3]]);
    expect(allMaxSubarrays([-1, -2, -3, 4, -1, 2, 1, -5, 4])).toEqual([[4, -1, 2, 1]]);
    expect(allMaxSubarrays([3, -1, 4, -1, 2, -4, 2, 3, -1])).toEqual([[3, -1, 4, -1, 2, -4, 2, 3]]);
    expect(allMaxSubarrays([-3, -2, -1])).toEqual([[-1]]);
    expect(allMaxSubarrays([5, -2, 3, -1, 2])).toEqual([[5, -2, 3, -1, 2]]);
});
