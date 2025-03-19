function maxSlidingWindowKadane(arr, windowSize) {
    if (windowSize > arr.length) return [];
    
    let result = [];
    let maxSum = -Infinity, currSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i];

        if (i >= windowSize - 1) {
            result.push(currSum);
            currSum -= arr[i - (windowSize - 1)];
        }
    }

    return result;
}

module.exports = maxSlidingWindowKadane;
