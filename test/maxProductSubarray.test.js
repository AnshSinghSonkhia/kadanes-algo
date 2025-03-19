const maxProductSubarray = require("../src/maxProductSubarray");

test("Finds the max product subarray", () => {
    expect(maxProductSubarray([2, 3, -2, 4])).toBe(6);
    expect(maxProductSubarray([-2, 3, -4])).toBe(24);
    expect(maxProductSubarray([-2, 0, -1])).toBe(0);
    expect(maxProductSubarray([0, 2])).toBe(2);
    expect(maxProductSubarray([-1, -3, -10, 0, 60])).toBe(60);
});
