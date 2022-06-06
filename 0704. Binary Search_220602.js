/* 
704. Binary Search
Easy

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.



Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1


Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
Accepted
904,912
Submissions
1,638,699
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

    let pivot = -1;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        pivot = Math.floor((left + right) / 2);
        if (nums[pivot] < target) {
            left = pivot + 1;
        }
        else if (target < nums[pivot]) {
            right = pivot - 1;
        }
        else if (target === nums[pivot]) {
            return pivot;
        }
    }
    return -1;
};

/* 
Success
Details 
Runtime: 110 ms, faster than 16.65% of JavaScript online submissions for Binary Search.
Memory Usage: 44.9 MB, less than 81.14% of JavaScript online submissions for Binary Search.
Next challenges:
Search in a Sorted Array of Unknown Size
 */