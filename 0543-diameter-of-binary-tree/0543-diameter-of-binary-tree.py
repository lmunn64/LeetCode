# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
   
   
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        maxPath = 0
        def dfs(root: Optional[TreeNode]): 
            nonlocal maxPath
            if not root: 
                return 0
            left = dfs(root.left)
            right = dfs(root.right)
            maxPath = max(maxPath, left + right)

            return 1 + max(left, right) 
        dfs(root)
        return maxPath
  
   

 