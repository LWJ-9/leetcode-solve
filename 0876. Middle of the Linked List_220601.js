/* 
876. Middle of the Linked List


Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:


Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

Constraints:

The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100
Accepted
677,136
Submissions
930,381
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
	let jump = head;
	let walk = head;
	while (jump && jump.next !== null) {
		jump = jump.next.next;
		walk = walk.next;
	}
	return walk;
};

/* 
Success
Details 
Runtime: 57 ms, faster than 94.70% of JavaScript online submissions for Middle of the Linked List.
Memory Usage: 42 MB, less than 67.88% of JavaScript online submissions for Middle of the Linked List.
Next challenges:
Delete the Middle Node of a Linked List
Maximum Twin Sum of a Linked List

*/