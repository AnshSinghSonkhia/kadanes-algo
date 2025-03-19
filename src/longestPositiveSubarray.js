function longestPositiveSubarray(arr) {
    let maxSubarray = [];
    let currentSubarray = [];
    let maxSum = 0, currentSum = 0;
  
    for (let num of arr) {
      currentSum += num;
      currentSubarray.push(num);
  
      if (currentSum > maxSum) {
        maxSum = currentSum;
        maxSubarray = [...currentSubarray];
      }
  
      if (currentSum <= 0) {
        currentSum = 0;
        currentSubarray = [];
      }
    }
  
    return maxSubarray;
  }
  
  module.exports = longestPositiveSubarray;
  