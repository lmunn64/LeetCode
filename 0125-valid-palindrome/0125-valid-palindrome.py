class Solution:
    def isPalindrome(self, s: str) -> bool:
       
        cleanString = [f.lower() for f in s if f.isalnum()]
        stringList = list(cleanString)
        stringList.reverse()
        o = 0
        while o < len(stringList):
            if(cleanString[o] != stringList[o]):
                return False
            o = o + 1
        return True

        