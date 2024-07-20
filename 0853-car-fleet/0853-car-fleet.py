class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        if len(position) == 1:
            return 1

        car_dict = {}
        for i in range(len(speed)):
            car_dict.update({position[i] : speed[i]})
        
        keys = list(car_dict.keys())
        keys.sort(reverse = True)
        sortDict = {i: car_dict[i] for i in keys}
        stack = []
        for pos, speed in sortDict.items():
            stack.append((target - pos) / speed)
            if len(stack) >=2 and stack[-1] <= stack[-2]:
                stack.pop()
        return len(stack)

       
