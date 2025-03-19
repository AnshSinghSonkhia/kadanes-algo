function maxNonAdjacentSubarraySum(arr) {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return Math.max(0, arr[0]);

    let incl = arr[0];  // Max sum including current element
    let excl = 0;       // Max sum excluding current element

    for (let i = 1; i < arr.length; i++) {
        let newExcl = Math.max(incl, excl);
        incl = excl + arr[i];
        excl = newExcl;
    }

    return Math.max(incl, excl);
}

module.exports = { maxNonAdjacentSubarraySum };
