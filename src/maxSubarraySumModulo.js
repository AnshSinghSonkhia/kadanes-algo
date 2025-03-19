function maxSubarraySumModulo(arr, mod) {
    let maxModSum = 0, prefixSum = 0;
    let prefixSet = new Set([0]);

    for (let num of arr) {
        prefixSum = (prefixSum + num) % mod;
        maxModSum = Math.max(maxModSum, prefixSum);
        
        for (let s of prefixSet) {
            maxModSum = Math.max(maxModSum, (prefixSum - s + mod) % mod);
        }

        prefixSet.add(prefixSum);
    }

    return maxModSum;
}

module.exports = { maxSubarraySumModulo };
