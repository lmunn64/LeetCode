class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        
        # hasht = {}
        # for i in range(len(nums)):
        #     hasht[nums[i]] = 1 + hasht.get(nums[i], 0)
        # minElements = len(hasht) - k
        # if minElements > 0:
        #     for j in range(minElements):
        #         valList = list(hasht.values())
        #         keyList = list(hasht.keys())
        #         minIndex = valList.index(min(valList))
        #         minKey = keyList[minIndex]
        #         hasht.pop(minKey)
        #     return hasht.keys()
        # else:
        #     return hasht.keys()

        count = {}
        freq = [[] for n in range(len(nums) + 1)] #create a list of empty lists length of our input array

        for n in nums:
            count[n] = 1 + count.get(n, 0)
        for n, c in count.items():
            freq[c].append(n)
        
        res = []
        for n in range(len(freq)-1, 0, -1):
            for i in freq[n]: #freq[i] is a list
                res.append(i)
                if len(res) == k:
                    return res
            


