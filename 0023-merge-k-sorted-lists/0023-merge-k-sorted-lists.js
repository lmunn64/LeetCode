/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists || lists.length == 0){
        return null
    }
    while(lists.length > 1){
        var mergedList = []
        for(var i = 0; i < lists.length; i+=2){
            var list1 = lists[i]
            var list2 = i + 1 < lists.length ? lists[i + 1] : null
            mergedList.push(merge(list1, list2))
        }
        lists = mergedList
    }
    return lists[0]
};
var merge = function(list1, list2){
    var list3Head = new ListNode(0)
    var curr = list3Head
    while(list1 && list2){
        if(list1.val < list2.val){
            curr.next = list1
            list1 = list1.next 
        }
        else{
            curr.next = list2
            list2 = list2.next
        }
        curr= curr.next
    }
    curr.next = list1 ? list1 : list2
    return list3Head.next
}