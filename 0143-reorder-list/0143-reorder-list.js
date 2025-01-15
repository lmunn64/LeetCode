/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    var slow = head 
    var fast = head.next 
    //get the second to last element in the list in slow
    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
    }
    //now reverse the back half of the list
    var second = slow.next
    var previous = (slow.next = null)
    while(second !== null){
        let tmp = second.next
        second.next = previous
        previous = second
        second = tmp
    }
    //then merge the first half and second half as if they were two lists
    var first = head
    var second = previous
    while(second !== null){
        let tmp1 = first.next
        let tmp2 = second.next
        first.next = second
        second.next = tmp1
        first = tmp1
        second = tmp2
    }
};