function allMaxSubarrays(arr) {
    let maxSum = -Infinity;
    let currentSum = 0;
    let start = 0;
    let subarrays = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (currentSum <= 0) {
            start = i;
            currentSum = arr[i];
        } else {
            currentSum += arr[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            subarrays = [[...arr.slice(start, i + 1)]];
        } else if (currentSum === maxSum) {
            subarrays.push([...arr.slice(start, i + 1)]);
        }
    }

    return subarrays;
}

module.exports = allMaxSubarrays;
