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
    if (typeof nums[0] === "undefined") {
        return -1;
    }
    let base_index = arguments[2] ? arguments[2] : 0;
    let mid_index = Math.floor((nums.length - 1) / 2);
    let mid_number = nums[mid_index];
    if (mid_number == target) {
        return mid_index + base_index;
    } else if (target < mid_number) {
        return search(nums.slice(0, mid_index), target, base_index);
    } else {
        return search(
            nums.slice(mid_index + 1, nums.length),
            target,
            base_index + mid_index + 1
        );
    }
};

// let _a = search([-1, 1, 3, 5, 9, 12], 0);
// console.log("" + _a);

/* 
one recursive way but not fast
47 / 47 test cases passed.
Status: Accepted
Runtime: 116 ms
Memory Usage: 45.6 MB
Your runtime beats 10.91 % of javascript submissions.
Your memory usage beats 9.48 % of javascript submissions.
 */