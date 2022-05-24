/* 
557. Reverse Words in a String III
Easy

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "God Ding"
Output: "doG gniD"
 

Constraints:

1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.
Accepted
452,168
Submissions
572,833
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	let words = s.split(' ');
	let ret_val = [];
	words.forEach(word => {
		ret_val.push([...word].reverse().join(""));
	})
	return ret_val.join(' ');
};

//console.log(reverseWords("Let's take LeetCode contest"));

/* 
Success
Details 
Runtime: 86 ms, faster than 70.23% of JavaScript online submissions for Reverse Words in a String III.
Memory Usage: 48.1 MB, less than 85.55% of JavaScript online submissions for Reverse Words in a String III.
Next challenges:
Reverse String II
 */