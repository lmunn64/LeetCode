class Solution {
    public String reverseStr(String s, int k) {
        int index = 0;
        String[] arr = s.split("");
        while(index < arr.length-1){
            int r = index + k - 1;
            if(r > arr.length - 1){
                r = arr.length - 1;
            }
            int l = index;
            while(l < r){
                String temp = arr[l];
                arr[l] = arr[r];
                arr[r] = temp;
                l++;
                r--;
            }
            index += 2 * k;
        }
        String output = String.join("", arr);
        return output;
    }
}