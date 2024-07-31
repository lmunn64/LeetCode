class Solution:
    def findMin(self, nums: List[int]) -> int:
        low, high = 0, len(nums) - 1
        curr_min = float("inf")

        while low <= high:
            mid = low + (high - low) // 2
            curr_min = min(curr_min, nums[mid])
            
            #lowest in upper half
            if nums[mid] > nums[high]:
                low = mid + 1
            
            else:
                high = mid - 1
            
        return min(curr_min, nums[mid])
