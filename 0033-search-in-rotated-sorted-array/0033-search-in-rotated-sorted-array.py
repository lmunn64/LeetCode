class Solution:
    def search(self, nums: List[int], target: int) -> int:

        high, low = len(nums) - 1, 0

        if len(nums) == 1:
            if nums[0] == target:
                return 0
            else: 
                return -1
        
        while low <= high:
            mid = low + (high - low) // 2
            if nums[mid] == target:
                return mid
            if nums[mid] < nums[high]:
                if nums[mid] > target or nums[high] < target:
                    high = mid - 1
                else:
                    low = mid + 1
            else:
                if nums[low] > target or nums[mid] > target:
                    low = mid + 1
                else: 
                    high = mid - 1
        return -1