class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        result = [0] * len(temperatures)
        stack = [] #stack of the previous days that have not been surpassed in temperature
        stack.append(0)
        for i in range(len(temperatures) - 1):
            while len(stack) > 0 and  temperatures[i+1] > temperatures[stack[-1]]:
                prevDay = stack.pop()
                result[prevDay] = i+1 - prevDay
            stack.append(i+1)
        return result