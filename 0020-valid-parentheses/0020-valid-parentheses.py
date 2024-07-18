
from collections import deque
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {"(" : ")", "{" : "}", "[" : "]"}

       
        for c in range(0, len(s)):
            if s[c] in "({[":
                stack.append(s[c])
            elif len(stack)==0 or s[c] != mapping[stack.pop()]:
                return False
        return len(stack) == 0 


        #     if s[c] == "[" or s[c] == "(" or s[c] == "{":
        #         stack.append(s[c])

        # if len(stack) == 0:
        #     return False    

        # for c in range(0, len(s)):
        #     if s[c] == "}":
        #         if stack[-1] == "{":
        #             stack.pop()
        #         else:
        #             return False
        #     if s[c] == "]":
        #         if stack[-1] == "[":
        #             stack.pop()
        #         else:
        #             return False
        #     if s[c] == ")":
        #         if stack[-1] == "(":
        #             stack.pop()
        #         else:
        #             return False
        # return True
        
