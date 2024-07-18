class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        lPointer = 0
        rPointer = len(numbers)-1
        while lPointer < rPointer and rPointer > lPointer:
            if numbers[lPointer] + numbers[rPointer] == target:
                return [lPointer+1, rPointer+1]
            elif numbers[lPointer] + numbers[rPointer] > target:
                rPointer-=1
            else:
                lPointer+=1