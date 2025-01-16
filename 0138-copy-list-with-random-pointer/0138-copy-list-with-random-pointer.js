/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    var dict = new Map()
    dict.set(null,null)
    curr = head
    while(curr){
        var newNode = new _Node(curr.val)
        dict.set(curr, newNode)
        curr = curr.next
    }
    curr = head
    while(curr){
        var copy = dict.get(curr)
        copy.next = dict.get(curr.next)
        copy.random = dict.get(curr.random)
        curr = curr.next
    }
    return dict.get(head) 
};