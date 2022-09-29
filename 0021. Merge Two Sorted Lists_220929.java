/* 
21. Merge Two Sorted Lists
Easy


You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. 
The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.



Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]


Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.

Accepted
2,647,940
Submissions
4,295,978

Similar Questions
Merge k Sorted Lists
Hard
Merge Sorted Array
Easy
Sort List
Medium
Shortest Word Distance II
Medium
Add Two Polynomials Represented as Linked Lists
Medium
Longest Common Subsequence Between Sorted Arrays
Medium
 */

/* *
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {

        ListNode dummyHead = new ListNode();
        ListNode lastNode = dummyHead;

        while (list1 != null && list2 != null) {
            if (list1.val < list2.val) {
                lastNode.next = list1;
                list1 = list1.next;
            } else {
                lastNode.next = list2;
                list2 = list2.next;
            }
            lastNode = lastNode.next;
        }
        if (list1 != null) {
            lastNode.next = list1;
        } else {
            lastNode.next = list2;
        }

        return dummyHead.next;
    }
}

/*
 * Success
 * Details
 * Runtime: 1 ms, faster than 81.75% of Java online submissions for Merge Two
 * Sorted Lists.
 * Memory Usage: 42.9 MB, less than 58.33% of Java online submissions for Merge
 * Two Sorted Lists.
 * Next challenges:
 * Merge k Sorted Lists
 * Merge Sorted Array
 * Sort List
 * Shortest Word Distance II
 * Add Two Polynomials Represented as Linked Lists
 * Longest Common Subsequence Between Sorted Arrays
 * Show off your acceptance:
 * Time Submitted
 * Status
 * Runtime
 * Memory
 * Language
 * 09/29/2022 15:43 Accepted 1 ms 42.9 MB java
 */