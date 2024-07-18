class Solution:
    def maxArea(self, height: List[int]) -> int:
        left, right = 0, len(height) - 1
        sol = 0
        while left < right:
            dist = right - left 
            maxH = max(height[left], height[right])
            minH = min(height[left], height[right])
            pSol = minH * dist
            if pSol > sol:
                sol = pSol
            if height[left] < height[right]:
                left+=1
            elif height[left] >= height[right]:
                right-=1
        return sol
        