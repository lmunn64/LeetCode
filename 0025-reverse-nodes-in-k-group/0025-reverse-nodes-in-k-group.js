/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(k == 1)
        return head
    var currHead = head
    var newHead = head
    var prev = null
    while(currHead !== null){
        var end = currHead
        for(var i = 1; i < k; i++){
            if(!end.next){
                prev.next = currHead
                return newHead
            }   
            end = end.next
        }
        if(newHead == head){
            newHead = end
        }
        var temp = end.next
        end.next = null
        reverseList(currHead)
        if(prev)
            prev.next = end
        prev = currHead
        currHead = temp
    }
    return newHead
};

var reverseList = function(head){
    if(head == null)
        return head
    var newHead = head
    if(head.next){
        newHead = reverseList(head.next)
        head.next.next = head
    }
    head.next = null
    return newHead
}