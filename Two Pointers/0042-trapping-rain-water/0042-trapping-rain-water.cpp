class Solution {
public:
    int trap(vector<int>& height) {
        int water, left, right, maxLeft, maxRight;
        left = 0;
        right = height.size() - 1;

        maxLeft = height[left];
        maxRight = height[right];

        water = 0;
        
        while(left < right){
            if(maxLeft <= maxRight){
                left++;
                maxLeft = max(maxLeft, height[left]);
                water += maxLeft - height[left];
            }
            else{
                right--;
                maxRight = max(maxRight, height[right]);
                water += maxRight - height[right];
            }
        }
        return water;
    }
};