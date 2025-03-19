function max3DSubmatrixSum(matrix) {
    if (!matrix.length || !matrix[0].length || !matrix[0][0].length) return 0;

    let maxSum = -Infinity;
    const depth = matrix.length;
    const rows = matrix[0].length;
    const cols = matrix[0][0].length;

    for (let d1 = 0; d1 < depth; d1++) {
        const temp2D = Array.from({ length: rows }, () => Array(cols).fill(0));
        
        for (let d2 = d1; d2 < depth; d2++) {
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    temp2D[r][c] += matrix[d2][r][c];
                }
            }

            maxSum = Math.max(maxSum, max2DSubmatrixSum(temp2D));
        }
    }

    return maxSum;
}

function max2DSubmatrixSum(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let maxSum = -Infinity;

    for (let left = 0; left < cols; left++) {
        const rowSum = Array(rows).fill(0);

        for (let right = left; right < cols; right++) {
            for (let i = 0; i < rows; i++) {
                rowSum[i] += matrix[i][right];
            }

            maxSum = Math.max(maxSum, kadane1D(rowSum));
        }
    }
    return maxSum;
}

function kadane1D(arr) {
    let maxSum = arr[0], currSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currSum = Math.max(arr[i], currSum + arr[i]);
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}

module.exports = max3DSubmatrixSum;