function maxSumPathInGrid(grid) {
    let rows = grid.length, cols = grid[0].length;

    for (let i = 1; i < rows; i++) {
        grid[i][0] += grid[i - 1][0];
    }
    for (let j = 1; j < cols; j++) {
        grid[0][j] += grid[0][j - 1];
    }
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1]);
        }
    }

    return grid[rows - 1][cols - 1];
}

module.exports = maxSumPathInGrid;
