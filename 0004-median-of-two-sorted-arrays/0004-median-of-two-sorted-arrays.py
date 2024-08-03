class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        A, B = nums1, nums2
        mergedLength = len(nums1) + len(nums2)
        half = mergedLength // 2

        if len(A) > len(B):
            A, B = B, A
        
        left, right = 0, len(A) - 1

        while True:
            midA = (left + right) // 2
            midB = half - midA - 2

            leftA = A[midA] if midA >= 0 else float("-infinity")
            rightA = A[midA + 1] if (midA + 1) < len(A) else float("infinity")
            leftB = B[midB] if midB >= 0 else float("-infinity")
            rightB = B[midB + 1] if (midB + 1) < len(B) else float("infinity")

            if leftA <= rightB and leftB <= rightA: 
                if mergedLength % 2:
                    return min(rightA, rightB)
                return (min(rightA, rightB) + max(leftA, leftB)) / 2

            elif leftA > rightB:
                right = midA - 1
            else: 
                left = midA + 1
                    
