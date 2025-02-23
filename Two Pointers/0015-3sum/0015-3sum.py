class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        output = []
        for i in range(len(nums)):
            if i > 0 and nums[i] == nums[i-1]:
                continue
            l, r = i + 1, len(nums) -1
            while l < r:
                zeroSum = nums[i] + nums[r] + nums[l]
                if zeroSum > 0:
                    r-=1
                elif zeroSum < 0: 
                    l+=1
                else:
                    output.append([nums[i], nums[r], nums[l]])
                    l+=1
                    while nums[l] == nums[l-1] and l < r:
                        l+=1
        return output
