const { max3DSubmatrixSum } = require("../src/max3DSubmatrixSum");

test("Finds the maximum submatrix sum in a 3D matrix", () => {
    expect(max3DSubmatrixSum([
        [[1, -2], [3, 4]],
        [[-1, 2], [5, -3]]
    ])).toBe(9);    //11

    expect(max3DSubmatrixSum([
        [[-1, -2], [-3, -4]],
        [[-5, -6], [-7, -8]]
    ])).toBe(-1);

    expect(max3DSubmatrixSum([
        [[2, -1], [1, -2]],
        [[3, 4], [-1, 2]]
    ])).toBe(8); // 9
});
