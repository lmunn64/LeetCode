class TimeMap:

    def __init__(self):
        self.timeMap = {}

    def set(self, key: str, value: str, timestamp: int) -> None:
        if self.timeMap.get(key):
            self.timeMap[key].append([value, timestamp])
        else:    
            self.timeMap.update({key : [[value, timestamp]]})

    def get(self, key: str, timestamp: int) -> str:
        timeValList = self.timeMap.get(key)
        if not timeValList:
            return ""
        high, low = len(timeValList) - 1, 0
        mid = 0
        while low <= high:
            mid = low + (high - low) // 2
            if timeValList[mid][1] == timestamp:
                return timeValList[mid][0]
            if timeValList[mid][1] < timestamp:
                low = mid + 1
            else:
                high = mid - 1 

        if timeValList[0][1] > timestamp:
            return ""

        while timeValList[mid][1] > timestamp and mid > 0:
            mid-=1

        return timeValList[mid][0] 
# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)