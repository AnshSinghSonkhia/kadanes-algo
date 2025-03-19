function smallestSubarrayWithSumAtLeast(nums, target) {
    let left = 0, sum = 0, minLength = Infinity, result = [];

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            // Check if this subarray is smaller than the current best
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                result = nums.slice(left, right + 1);
            }
            sum -= nums[left];
            left++;
        }
    }

    return result.length > 0 ? result : [];  // Return empty array if no valid subarray found
}

module.exports = smallestSubarrayWithSumAtLeast;
