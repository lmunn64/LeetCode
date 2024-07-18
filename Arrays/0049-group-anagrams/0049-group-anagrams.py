class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

        hashmap = defaultdict(list)
        
        for i in strs:
            sorted_str = ''.join(sorted(i))
            hashmap[sorted_str].append(i)

        return list(hashmap.values())

    
        
        