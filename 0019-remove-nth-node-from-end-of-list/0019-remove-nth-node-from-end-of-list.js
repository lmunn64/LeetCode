/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var curr = reverse(head)
    var tail = curr
    var prev = null
    for(var i = 1; i < n; i++){
        prev = curr
        curr = curr.next
    }
    var tmp = curr.next
    curr.next = null
    if(prev === null)
        tail = tmp
    else
        prev.next = tmp
    var res = reverse(tail)
    return res
};

var reverse = function(head) {
    var curr = head
    var prev = null
    while(curr !== null){
        var tmp = curr.next
        curr.next = prev
        prev = curr
        curr = tmp
    }
    return prev
}