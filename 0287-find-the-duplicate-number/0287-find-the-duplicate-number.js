/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var slow = nums[0]
    var fast = nums[nums[0]]

    while(fast !== slow){
        slow = nums[slow]
        fast = nums[nums[fast]]
    }
    var slow2 = 0
    while(slow !== slow2){
        slow = nums[slow]
        slow2 = nums[slow2]
    }
    return slow
};

// /**
//  * Map solution DP O(n) O(n)
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findDuplicate = function(nums) {
//     var hash = new Set()
//     for(var i = 0; i < nums.length; i++){
//         if(hash.has(nums[i])){
//             return nums[i]
//         }
//         hash.add(nums[i], 1)
//     }
//     return -1
// };