/* 
35. Search Insert Position
Easy

Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
Accepted
1,446,972
Submissions
3,420,789
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let pivot = -1;
    while (left <= right) {
        pivot = Math.floor((left + (right - left) / 2));
        if (target < nums[pivot]) {
            right = pivot - 1;
        } else if (nums[pivot] < target) {
            left = pivot + 1;
        } else {
            return pivot;
        }
    }
    return right + 1;
};

console.log(searchInsert([1, 3, 5, 6], -8));

/* 
Success
Details 
Runtime: 63 ms, faster than 86.84% of JavaScript online submissions for Search Insert Position.
Memory Usage: 42.2 MB, less than 62.65% of JavaScript online submissions for Search Insert Position.
Next challenges:
Coin Change 2
Guess the Word
Largest Subarray Length K
 */