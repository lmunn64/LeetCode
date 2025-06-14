class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        Set<Integer> li = new HashSet<>();
        Set<Integer> out = new HashSet<>();
        for(int num : nums1){
            li.add(num);
        }
        for(int num : nums2){
            if(li.contains(num)){
                out.add(num);
            }
        }
        int arr[] = new int[out.size()];
        int i = 0;
        for(int num : out){
            arr[i++] = num;
        }
        return arr;
    }
}