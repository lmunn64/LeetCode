class Solution:
    def search(self, nums: List[int], target: int) -> int:

        high = len(nums)-1
        low = 0

        while low<=high:
            middle = high + low // 2
            if nums[middle] == target: 
                return middle
            elif nums[middle] > target:
                high = middle -1
            elif nums[middle] < target:
                low = middle+1
        return -1
    
        
        