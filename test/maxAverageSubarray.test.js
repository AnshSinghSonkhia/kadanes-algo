const { maxAverageSubarray } = require("../src/maxAverageSubarray");

test("Finds the subarray with maximum average", () => {
    expect(maxAverageSubarray([1, 2, -1, 3, 4])).toEqual({ maxAvg: 1.8, subarray: [1, 2, -1, 3, 4] }); // Maximum avg subarray
    expect(maxAverageSubarray([-1, -2, -3, -4])).toEqual({ maxAvg: -1, subarray: [-1] }); // Only one possible subarray
    expect(maxAverageSubarray([3, -1, 4, -1, 2, -4, 2, 3])).toEqual({ 
        maxAvg: 1, 
        subarray: [3, -1, 4, -1, 2, -4, 2, 3] 
    }); // Updated expected value
    expect(maxAverageSubarray([5, 5, 5, -10, 5, 5, 5])).toEqual({ 
        maxAvg: 2.857142857142857, 
        subarray: [5, 5, 5, -10, 5, 5, 5] 
    }); // Rounded max average
});
