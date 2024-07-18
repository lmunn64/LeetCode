class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        # First solution
        # lst = []
        # boole = False
        # if (len(s) != len(t)) or (1 > len(s)) or (len(t) > 5*pow(10,4)):
        #     return boole
        # i = 0
        # for element in t:
        #     try:
        #         .remove(element)
        #     except:
        #         return False
        #     boole = True
        # return boole

        if (len(s) != len(t)):
           return False
        countS, countT = {},{}
        for i in range(len(s)):
            countS[s[i]] = 1+countS.get(s[i],0)
            countT[t[i]] = 1+countT.get(t[i],0)
        return countS == countT


        
        
        
        