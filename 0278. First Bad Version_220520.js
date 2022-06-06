/* 
278. First Bad Version
Easy

4922

1852

Add to List

Share
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
Example 2:

Input: n = 1, bad = 1
Output: 1
 

Constraints:

1 <= bad <= n <= 231 - 1
Accepted
1,012,643
Submissions
2,421,023
Related Topics
Binary Searcb Interactive
Find First and Last Position of Element in Sorted Array
Medium
Search Insert Position
Easy
Guess Number Higher or Lower
Easy
 */


/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

// isBadVersion = function (version) {
//     return version >= 100 ? true : false;
// };

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
// 220527
// VERSION 2
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 1;
        let right = n;
        while (left <= right) {
            let pivot = Math.floor((left + right) / 2);
            if (isBadVersion(pivot) === true) {
                right = pivot - 1;
            } else {
                left = pivot + 1;
            }
        }
        return right + 1;
    };
};

/* 
Success
Details 
Runtime: 92 ms, faster than 31.70% of JavaScript online submissions for First Bad Version.
Memory Usage: 42.1 MB, less than 18.00% of JavaScript online submissions for First Bad Version.
Next challenges:
Find First and Last Position of Element in Sorted Array
Guess Number Higher or Lower
*/

/* 
--VERSION 1  --
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
return function (n) {
    let min = 1;
    let max = n;
    // let pivot = Math.floor((min + max) / 2);
    let last_true = -1;
    while (min < max) {
        let pivot = Math.floor((min + max) / 2);
        if (isBadVersion(pivot) === true) {
            last_true = pivot;
            max = pivot;
        } else {
            min = pivot + 1;
        }
    }
    if (min === max && isBadVersion(min)) {
        last_true = min;
    }
    return last_true;
};
};
 * /
// console.log(solution(isBadVersion)(555));
