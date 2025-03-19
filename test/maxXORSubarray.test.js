const { maxXORSubarray } = require("../src/maxXORSubarray");

test("Finds the maximum XOR of any subarray", () => {
    expect(maxXORSubarray([8, 1, 2, 12, 7, 6])).toBe(15);
    expect(maxXORSubarray([4, 6])).toBe(6);
    expect(maxXORSubarray([9, 8, 5])).toBe(13);
});
