# kadanes-algo

A powerful JavaScript package with 40+ variations of Kadane’s Algorithm to solve various subarray problems.

<code><img height="30" src="https://img.shields.io/badge/NPM-111111?style=for-the-badge&logo=npm&logoColor=#c63635"></code> <code><img height="30" src="https://img.shields.io/badge/JavaScript-111111?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></code>

## Features

✅ 40+ optimized Kadane’s Algorithm implementations

✅ Handles maximum sum subarrays, subsequences, XOR subarrays, modulo constraints, and more

✅ Efficient solutions with linear or near-linear time complexity

✅ No dependencies – lightweight and fast

## Installation
```sh
npm i kadanes-algo
```

## Importing
For CommonJS (Node.js Default)

```js
const kadanes = require('kadanes-algo');
```

For ES Modules (ECMAScript Imports)

```js
import kadanes from 'kadanes-algo';
```

# Usage Examples

### Find the Maximum Sum Subarray

```js
const kadanes = require('kadanes-algo');

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(kadanes.maxSubarraySum(arr));       
// Output: 6 (subarray: [4, -1, 2, 1])
```

### Find the Maximum Sum in a Circular Array

```js
const kadanes = require('kadanes-algo');

const arr = [8, -1, 3, 4];
console.log(kadanes.maxCircularSubarraySum(arr));  
// Output: 15 (subarray: [8, -1, 3, 4])
```

### Find Maximum XOR Subarray

```js
const kadanes = require('kadanes-algo');

const arr = [8, 1, 2, 12, 7, 6];
console.log(kadanes.maxXORSubarray(arr));  
// Output: 15
```

### Find the Maximum Sum of Two Non-Overlapping Subarrays

```js
const kadanes = require('kadanes-algo');

const arr = [3, 8, 1, 9, 6, 7, 2, 5];
console.log(kadanes.maxTwoNonOverlappingSubarrays(arr, 2, 3));  
// Output: 28
```

### Find the Longest Subarray with a Given Sum

```js
const kadanes = require('kadanes-algo');

const arr = [1, 2, 3, 7, 5];
console.log(kadanes.longestSubarrayWithSum(arr, 12));  
// Output: [2, 3, 7] (subarray that sums to 12)
```

# API Reference

| Function Name                        | Description                                           |
|--------------------------------------|-------------------------------------------------------|
| allMaxSubarrays(arr)                 | Finds all maximum sum subarrays                       |
| countMaxSumSubarrays(arr)            | Counts subarrays with the maximum sum                 |
| longestPositiveSubarray(arr)         | Finds the longest contiguous positive subarray        |
| longestSubarrayWithSum(arr, target)  | Returns the longest subarray with sum equal to target |
| max3DSubmatrixSum(matrix)            | Finds the max sum in a 3D matrix                      |
| maxSubarraySum(arr)                  | Finds the maximum sum of any contiguous subarray      |
| minSubarraySum(arr)                  | Finds the minimum sum subarray                        |
| maxAbsoluteSubarraySum(arr)          | Finds the maximum absolute sum of any subarray        |
| maxAlternatingSubarraySum(arr)       | Finds the max sum with alternating signs              |
| maxAverageSubarray(arr, k)           | Finds the max average subarray of length k            |
| maxBinarySubarraySum(arr)            | Finds the max sum in a binary array (0s & 1s)         |
| maxCircularSubarraySum(arr)          | Finds the max sum in a circular array                 |
| maxEvenOddSubarraySum(arr)           | Finds the max sum subarray with alternating even-odd elements |
| maxIncreasingSubarraySum(arr)        | Finds the max sum of a strictly increasing subarray   |
| maxNonAdjacentSubarraySum(arr)       | Finds the max sum where no two selected elements are adjacent |
| maxProductSubarray(arr)              | Finds the maximum product subarray                    |
| maxSlidingWindowKadane(arr, k)       | Finds the max sum in a sliding window of size k       |
| maxSubarray(arr)                     | Finds the maximum subarray                            |
| maxSubarrayKConcat(arr, k)           | Finds max sum in an array repeated k times            |
| maxSubarrayKConcatSum(arr, k)        | Finds max sum in an array repeated k times            |
| maxSubarrayRangeQuery(arr)           | Finds the max sum in a range query                    |
| maxSubarrayReplacingNegatives(arr)   | Finds the max sum after replacing negatives           |
| maxSubarraySumInRotatedArray(arr)    | Finds the max sum in a rotated array                  |
| maxSubarraySumModulo(arr)            | Finds the max sum with modulo constraints             |
| maxSubarraySumSkippingK(arr)         | Finds the max sum skipping k elements                 |
| maxSubarraySumWithKDeletions(arr)    | Finds the max sum with k deletions                    |
| maxSubarraySumWithKModifications(arr)| Finds the max sum with k modifications                |
| maxSubarraySumWithOneDeletion(arr)   | Finds the max sum with one deletion                   |
| maxSubarraySumWithOneSplit(arr)      | Finds the max sum with one split                      |
| maxSubarraySumWithOneSwap(arr)       | Finds max sum after one swap of two elements          |
| maxSubarrayWithDistinctElements(arr) | Finds the max sum with distinct elements              |
| maxSubmatrixSum(arr)                 | Finds the max sum in a submatrix                      |
| maxSumIncreasingSubsequence(arr)     | Finds the max sum increasing subsequence              |
| maxSumPathBetweenIndices(arr)        | Finds the max sum path between indices                |
| maxSumPathInGrid(arr)                | Finds the max sum path in a grid                      |
| maxTwoNonOverlappingSubarrays(arr)   | Finds the max sum of two non-overlapping subarrays    |
| maxWeightedSubarray(arr)             | Finds the max weighted subarray                       |
| maxXORSubarray(arr)                  | Finds the max XOR value of any contiguous subarray    |
| smallestMaxSubarray(arr)             | Finds the smallest max subarray                       |
| smallestSubarrayWithSumAtLeast(arr)  | Finds the smallest subarray with sum at least         |
