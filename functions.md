1. Basic Kadane's Algorithm
Function: maxSubarraySum(arr: number[]): number
Description: Returns the maximum sum of a contiguous subarray.
2. Kadane's Algorithm with Subarray Tracking
Function: maxSubarray(arr: number[]): { maxSum: number, subarray: number[] }
Description: Returns the maximum sum along with the subarray contributing to it.
3. Kadane’s Algorithm for 2D Arrays (Largest Sum in a Matrix)
Function: maxSubmatrixSum(matrix: number[][]): number
Description: Finds the maximum sum of a contiguous submatrix in a given 2D array.
4. Modified Kadane’s for Circular Arrays
Function: maxCircularSubarraySum(arr: number[]): number
Description: Handles cases where the maximum sum subarray may wrap around the start and end.
5. Kadane’s for Minimum Subarray Sum
Function: minSubarraySum(arr: number[]): number
Description: Returns the minimum sum of a contiguous subarray.
6. Kadane’s for Finding the Longest Positive Subarray
Function: longestPositiveSubarray(arr: number[]): number[]
Description: Returns the longest subarray with a sum greater than zero.
7. Kadane’s for Maximum Absolute Subarray Sum
Function: maxAbsoluteSubarraySum(arr: number[]): number
Description: Returns the maximum of either the max positive subarray sum or min (negative) subarray sum.
8. Kadane’s Algorithm for K-Constrained Maximum Subarray Sum
Function: maxSubarrayKConcat(arr: number[], k: number): number
Description: Handles cases where the input array is concatenated k times and finds the max subarray sum.
9. Kadane’s Algorithm for Maximum Product Subarray
Function: maxProductSubarray(arr: number[]): number
Description: Uses a modified Kadane’s Algorithm to find the contiguous subarray with the maximum product.

<!-- 10. Kadane’s Algorithm for Longest Subarray with Sum >= Target
Function: longestSubarrayWithSumAtLeast(arr: number[], target: number): number[]
Description: Returns the longest contiguous subarray where the sum is at least target. -->

10. Sliding Window Algorithm for Smallest Subarray with Sum ≥ Target  
**Function:** `smallestSubarrayWithSumAtLeast(arr: number[], target: number): number[]`  
**Description:** Returns the **smallest** contiguous subarray where the sum is at least `target`.  
**Algorithm:** Uses a **sliding window** approach to efficiently find the smallest subarray in **O(n)** time.

11. Kadane’s Algorithm for Finding All Maximum Subarrays
Function: allMaxSubarrays(arr: number[]): number[][]
Description: Returns all subarrays that have the maximum possible sum.
12. Kadane’s Algorithm for Alternating Subarrays (Positive-Negative Pattern)
Function: maxAlternatingSubarraySum(arr: number[]): number
Description: Finds the max sum of a subarray where elements alternate in sign.
13. Kadane’s Algorithm for Multi-Dimensional Arrays (3D Matrices)
Function: max3DSubmatrixSum(matrix: number[][][]): number
Description: Finds the largest sum submatrix in a 3D matrix.
14. Kadane’s Algorithm for Dynamic Range Queries (Segment Tree Optimized Kadane)
Function: maxSubarrayRangeQuery(arr: number[], queries: { l: number, r: number }[]): number[]
Description: Given multiple range queries (l, r), returns the max subarray sum in each range.
15. Kadane’s Algorithm with Element Removal Allowed
Function: maxSubarraySumWithOneDeletion(arr: number[]): number
Description: Finds the max sum of a subarray while allowing at most one element to be removed.
16. Kadane’s Algorithm for Contiguous Odd/Even Subarrays
Function: maxEvenOddSubarraySum(arr: number[]): number
Description: Finds the max sum subarray where numbers alternate between even and odd.
17. Kadane’s Algorithm for Lexicographically Smallest Max Subarray
Function: smallestMaxSubarray(arr: number[]): number[]
Description: If multiple subarrays give the max sum, return the lexicographically smallest one.
18. Kadane’s Algorithm for Weighted Subarrays
Function: maxWeightedSubarray(arr: number[], weights: number[]): number
Description: Finds the max sum considering additional weights for each element.
19. Kadane’s Algorithm for Consecutive Elements Constraint
Function: maxSubarrayWithDistinctElements(arr: number[]): number
Description: Finds the max sum where all elements in the subarray are distinct.
20. Kadane’s Algorithm for Finding the Subarray with Maximum Average
Function: maxAverageSubarray(arr: number[]): { maxAvg: number, subarray: number[] }
Description: Returns the contiguous subarray with the highest average value.
21. Kadane’s Algorithm for Maximum Sum of Non-Adjacent Elements
Function: maxNonAdjacentSubarraySum(arr: number[]): number
Description: Finds the maximum sum subarray where no two selected elements are adjacent.
22. Kadane’s Algorithm for Maximum Subarray Sum in a Rotated Array
Function: maxSubarraySumInRotatedArray(arr: number[]): number
Description: Finds the max sum when elements can be rotated (circular array extension).
23. Kadane’s Algorithm with At Most K Element Removals
Function: maxSubarraySumWithKDeletions(arr: number[], k: number): number
Description: Finds the max sum subarray while allowing up to k element deletions.
24. Kadane’s Algorithm for Maximum Sum with At Most K Modifications
Function: maxSubarraySumWithKModifications(arr: number[], k: number, val: number): number
Description: Finds the max sum subarray with up to k elements replaced by val.
25. Kadane’s Algorithm for Maximum Sum Using At Most One Swap
Function: maxSubarraySumWithOneSwap(arr: number[]): number
Description: Finds the max sum subarray where one swap of two elements is allowed.
26. Kadane’s Algorithm for Strictly Increasing Subarrays
Function: maxIncreasingSubarraySum(arr: number[]): number
Description: Finds the max sum of a contiguous subarray where numbers are strictly increasing.
27. Kadane’s Algorithm for Maximum XOR Subarray
Function: maxXORSubarray(arr: number[]): number
Description: Finds the maximum XOR value of any contiguous subarray (useful in cryptography and bitwise problems).
28. Kadane’s Algorithm for Maximum Sum Subarray with Modulo Constraint
Function: maxSubarraySumModulo(arr: number[], mod: number): number
Description: Finds the max sum subarray where the sum is taken modulo mod.
29. Kadane’s Algorithm for Longest Subarray with Sum Equal to Target
Function: longestSubarrayWithSum(arr: number[], target: number): number[]
Description: Returns the longest contiguous subarray whose sum is exactly equal to target.
30. Kadane’s Algorithm for Maximum Sum of Two Non-Overlapping Subarrays
Function: maxTwoNonOverlappingSubarrays(arr: number[], firstLen: number, secondLen: number): number
Description: Finds two non-overlapping subarrays of given lengths that yield the maximum sum.
31. Kadane’s Algorithm for Maximum Sum with Skip Constraint
Function: maxSubarraySumSkippingK(arr: number[], k: number): number
Description: Finds the max sum where every k-th element is skipped.
32. Kadane’s Algorithm for Maximum Sum Path Between Two Indices
Function: maxSumPathBetweenIndices(arr: number[], start: number, end: number): number
Description: Finds the max sum subarray between two fixed indices.
33. Kadane’s Algorithm for Maximum Sum Path in a Grid (2D Version)
Function: maxSumPathInGrid(grid: number[][]): number
Description: Finds the max sum path in a 2D grid from top-left to bottom-right.
34. Kadane’s Algorithm for Finding the Number of Maximum Sum Subarrays
Function: countMaxSumSubarrays(arr: number[]): number
Description: Returns the count of all possible contiguous subarrays that have the maximum sum.
35. Kadane’s Algorithm for Weighted Sliding Window Maximum
Function: maxSlidingWindowKadane(arr: number[], windowSize: number): number[]
Description: Finds the max subarray sum within a sliding window of given size.
36. Kadane’s Algorithm for Maximum Sum Increasing Subsequence
Function: maxSumIncreasingSubsequence(arr: number[]): number
Description: Finds the maximum sum of an increasing subsequence using a modified Kadane’s approach.
37. Kadane’s Algorithm for Maximum Sum of Concatenated K Copies
Function: maxSubarrayKConcatSum(arr: number[], k: number): number
Description: Finds the max sum subarray in an array repeated k times.
38. Kadane’s Algorithm for Maximum Sum After Replacing Negatives with Zeros
Function: maxSubarrayReplacingNegatives(arr: number[]): number
Description: Computes the max sum after replacing all negative numbers with zero.
39. Kadane’s Algorithm for Maximum Sum in a Binary Array (0s and 1s only)
Function: maxBinarySubarraySum(arr: number[]): number
Description: Finds the max sum in a binary array where only 0s and 1s are present.
40. Kadane’s Algorithm for Maximum Sum After At Most One Split
Function: maxSubarraySumWithOneSplit(arr: number[]): number
Description: Finds the maximum sum when one subarray can be split into two non-overlapping parts.