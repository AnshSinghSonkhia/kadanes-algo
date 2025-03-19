function maxSubmatrixSum(matrix) {
    if (!matrix.length || !matrix[0].length) return 0;
    
    const rows = matrix.length, cols = matrix[0].length;
    let maxSum = -Infinity;
  
    for (let left = 0; left < cols; left++) {
      let temp = new Array(rows).fill(0);
  
      for (let right = left; right < cols; right++) {
        for (let row = 0; row < rows; row++) {
          temp[row] += matrix[row][right];
        }
  
        let currentSum = 0, localMax = -Infinity;
        for (let num of temp) {
          currentSum = Math.max(num, currentSum + num);
          localMax = Math.max(localMax, currentSum);
        }
  
        maxSum = Math.max(maxSum, localMax);
      }
    }
    return maxSum;
  }
  
  module.exports = maxSubmatrixSum;
  