/* 

189. Rotate Array

Given an array, rotate the array to the right by k steps, where k is non-negative.


Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
 

Follow up:

Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
Could you do it in-place with O(1) extra space?
Accepted
1,131,488
Submissions
2,924,439

Hint:

The easiest solution would use additional memory and that is perfectly fine.

The actual trick comes when trying to solve this problem without using any additional memory.
This means you need to use the original array somehow to move the elements around.
Now, we can place each element in its original location and shift all the elements around it to adjust as that would be too costly and most likely will time out on larger input arrays.

One line of thought is based on reversing the array (or parts of it) to obtain the desired result.
Think about how reversal might potentially help us out by using an example.

The other line of thought is a tad bit complicated but essentially it builds on the idea of placing each element in its original position while keeping track of the element originally in that position.
Basically, at every step, we place an element in its rightful position and keep track of the element already there or the one being overwritten in an additional variable.
We can't do this in one linear pass and the idea here is based on cyclic-dependencies between elements.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    // return nums.slice(nums.length - k).concat(nums.slice(0, nums.length - k));
    let slideWidth = k % nums.length;
    if (0 === slideWidth) {
        return nums;
    }
    reverseArray(nums);
    reverseArray(nums, 0, slideWidth - 1);
    reverseArray(nums, slideWidth)
    return nums;
};

var reverseArray = function (array, left = 0, right = array.length - 1) {
    // let left = 0;
    // let right = array.length - 1;
    while (left < right) {
        [array[left], array[right]] = [array[right], array[left]];
        left++;
        right--;
    }
};

let aa = rotate([0, 1], 99);
console.log(aa.toString());


/* 

Success
Details 
Runtime: 181 ms, faster than 8.23% of JavaScript online submissions for Rotate Array.
Memory Usage: 52.3 MB, less than 51.15% of JavaScript online submissions for Rotate Array.
Next challenges:
Rotate List
Reverse Words in a String II

*/