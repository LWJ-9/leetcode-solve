/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let pivot;
    while (left < right) {
        pivot = Math.floor((left + right) / 2);
        if (target < nums[pivot]) {
            right = pivot;
        } else if (nums[pivot] < target) {
            left = pivot + 1;
        } else if (nums[pivot] === target) {
            break;
        }
    }
    pivot = Math.floor((left + right) / 2);
    if (nums[pivot] >= target) {
        return pivot;
    }
    if (nums[pivot] < target) {
        return pivot + 1;
    }
};

console.log(searchInsert([1, 3, 5, 6], -8));

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

/* 
64 / 64 test cases passed.
Status: Accepted
Runtime: 85 ms
Memory Usage: 42.3 MB

Your runtime beats 37.32 % of javascript submissions.

Your memory usage beats 38.86 % of javascript submissions.
 */