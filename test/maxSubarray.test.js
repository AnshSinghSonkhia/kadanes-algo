const maxSubarray = require("../src/maxSubarray");

test("Finds max subarray sum and subarray itself", () => {
  expect(maxSubarray([-2,1,-3,4,-1,2,1,-5,4])).toEqual({ maxSum: 6, subarray: [4,-1,2,1] });
  expect(maxSubarray([1,2,3,4,5])).toEqual({ maxSum: 15, subarray: [1,2,3,4,5] });
  expect(maxSubarray([-1,-2,-3,-4])).toEqual({ maxSum: -1, subarray: [-1] });
});
