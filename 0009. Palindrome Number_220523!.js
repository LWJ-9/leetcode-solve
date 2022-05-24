/* 
9. Palindrome Number

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?
Accepted
2,095,321
Submissions
3,995,118

Similar Questions
Palindrome Linked List
Easy
Find Palindrome With Fixed Length
Medium

Hint
Beware of overflow when you reverse the integer.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	if (x < 0 || (x % 10 === 0 && x != 0)) {
		return false;
	}

	let reversedNumber = 0;
	while (x > reversedNumber) {
		reversedNumber = reversedNumber * 10 + Math.floor(x % 10);
		x = Math.floor(x / 10);
	}
	return x === reversedNumber || x === Math.floor(reversedNumber / 10);
};

// console.log(isPalindrome(9999));

/* 
Success
Details 
Runtime: 348 ms, faster than 15.13% of JavaScript online submissions for Palindrome Number.
Memory Usage: 50.1 MB, less than 93.67% of JavaScript online submissions for Palindrome Number.
Next challenges:
Palindrome Linked List
Find Palindrome With Fixed Length
 */