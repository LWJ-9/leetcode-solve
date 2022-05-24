/* 
344. Reverse String
Easy

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
	for (let i = 0; i < Math.floor(s.length / 2); i++) {
		[s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
	}
};

/* 
Success
Details 
Runtime: 123 ms, faster than 48.28% of JavaScript online submissions for Reverse String.
Memory Usage: 49.1 MB, less than 78.09% of JavaScript online submissions for Reverse String.
Next challenges:
Reverse Vowels of a String
Reverse String II
 */