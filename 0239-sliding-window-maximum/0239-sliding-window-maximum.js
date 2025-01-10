/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    var l = 0
    var r = 0
    const result = []
    const q = [nums[0]]                                                                                             
    while(l <= nums.length - k){
        while(r - l + 1 < k){
            r++
            while(nums[r] > q[q.length - 1]){
                q.pop()
            }
            q.push(nums[r])
        }
        result.push(q[0])
        if(q[0] == nums[l])
            q.shift()
        l++
    }
    return result
};