// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findDuplicate = function(nums) {

// };

/**
 * Map solution DP O(n) O(n)
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var hash = new Set()
    for(var i = 0; i < nums.length; i++){
        if(hash.has(nums[i])){
            return nums[i]
        }
        hash.add(nums[i], 1)
    }
    return -1
};