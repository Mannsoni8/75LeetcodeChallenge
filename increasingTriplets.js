/**
 *  Increasing Triplet Subsequence

    Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
 */

let nums = [1, 2, 3, 4, 5];
let first = Infinity;
let second = Infinity;
for (let n of nums) {
  if (n <= first) {
    first = n;
  } else if (n <= second) {
    second = n;
  } else {
    console.log(true);
  }
}
console.log(false);
