/* 
2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
Accepted
2,800,924
Submissions
7,223,550
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let upgrade = 0;
	const fakeNode = new ListNode();
	let cursor = fakeNode;
	while (l1 || l2 || upgrade) {
		const val_1 = l1 ? l1.val : 0;
		const val_2 = l2 ? l2.val : 0;
		const sum = val_1 + val_2 + upgrade;
		const base = sum % 10;
		cursor.next = new ListNode(base);
		cursor = cursor.next;
		upgrade = sum >= 10 ? 1 : 0;
		l1 = l1 ? l1.next : l1;
		l2 = l2 ? l2.next : l2;
	}
	return fakeNode.next;
};

/* 
Success
Details 
Runtime: 173 ms, faster than 26.70% of JavaScript online submissions for Add Two Numbers.
Memory Usage: 47.3 MB, less than 54.92% of JavaScript online submissions for Add Two Numbers.
Next challenges:
Multiply Strings
Add Binary
Sum of Two Integers
Add Strings
Add Two Numbers II
Add to Array-Form of Integer
Add Two Polynomials Represented as Linked Lists
*/