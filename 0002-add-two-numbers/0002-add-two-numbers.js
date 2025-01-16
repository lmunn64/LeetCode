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
var addTwoNumbers = function(l1, l2) {
    var remainder = 0
    var add = 0
    var newHead = new ListNode(0, null)
    var curr = newHead
    var prev = null
    while(l1 || l2){
        if(l1){
            //both have
            if(l2){
                var sum = l1.val + l2.val + remainder
                add = sum % 10
                remainder = Math.floor(sum / 10)
                l1 = l1.next
                l2 = l2.next
            }
            //l1
            else{
                var sum = l1.val + remainder
                add = sum % 10
                remainder = Math.floor(sum / 10)
                l1 = l1.next
            }
        }
        //l2
        else{
            var sum = l2.val + remainder
            add = sum % 10
            remainder = Math.floor(sum / 10)
            l2 = l2.next
        }
        curr.val = add
        if(prev){
            prev.next = curr
        }
        prev = curr
        curr = new ListNode(0, null)
    }
    if(remainder > 0){
        curr.val = remainder
        prev.next = curr
    }
    return newHead
};