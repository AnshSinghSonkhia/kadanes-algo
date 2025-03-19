function maxSubarraySumSkippingK(arr, k) {
    let include = 0, exclude = 0;

    for (let i = 0; i < arr.length; i++) {
        if ((i + 1) % k === 0) continue; // Skip every k-th element
        let newExclude = Math.max(include, exclude);
        include = exclude + arr[i];
        exclude = newExclude;
    }

    return Math.max(include, exclude);
}

module.exports = maxSubarraySumSkippingK;
