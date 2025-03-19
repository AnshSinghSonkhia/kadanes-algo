function maxXORSubarray(arr) {
    let maxXOR = 0, prefixXOR = 0;
    let seen = new Set([0]);

    for (let num of arr) {
        prefixXOR ^= num;
        for (let s of seen) {
            maxXOR = Math.max(maxXOR, prefixXOR ^ s);
        }
        seen.add(prefixXOR);
    }

    return maxXOR;
}

module.exports = { maxXORSubarray };
