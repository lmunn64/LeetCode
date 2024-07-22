import math
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        low, high = 1, max(piles)
        result = high

        while low <= high:
            k = high + low // 2
            h1 = 0
            for i in piles:
                h1 += math.ceil(float(i)/k)
            if h1 > h:
                low = k + 1
            if h1 <= h:
                result = k
                high = k - 1
        return result