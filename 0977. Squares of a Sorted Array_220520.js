/* 
977. Squares of a Sorted Array
Easy

Given an integer array nums sorted in non-decreasing order, 
return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
 

Follow up: Squaring each element and sorting the new array is very trivial, 
could you find an O(n) solution using a different approach?

Accepted
1,006,658
Submissions
1,404,976

Merge Sorted Array
Easy
Sort Transformed Array
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let left = 0,
        right = nums.length - 1,
        cursor = nums.length - 1;
    ret_val = new Array(nums.length);
    while (left < right) {
        if (Math.abs(nums[left]) <= Math.abs(nums[right])) {
            ret_val[cursor--] = nums[right] * nums[right];
            right--;
        } else if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            ret_val[cursor--] = nums[left] * nums[left];
            left++;
        }
    }
    ret_val[cursor] = nums[right] * nums[right];
    return ret_val;
};

/* 
137 / 137 test cases passed.
Status: Accepted
Runtime: 141 ms
Your runtime beats 51.81 % of javascript submissions.
Memory Usage: 49 MB
Your memory usage beats 32.58 % of javascript submissions.
 */