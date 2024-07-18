class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        hashmap = {}
        return self.uniquePathHelp(m, n, hashmap)
        
    def uniquePathHelp(self, i: int, j: int, d: dict) -> int:
        if i == 1 and j == 1:
            return 1
        if i == 0 or j == 0:
            return 0
        key = str(i) + "," + str(j)
        if d.get(key, -1) != -1:
            return d[key]
        d[key] = self.uniquePathHelp(i-1, j, d) + self.uniquePathHelp(i, j-1, d)
        return d[key]

        
            