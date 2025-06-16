class Solution {
    public int lengthOfLongestSubstring(String s) {
        int out = 0;
        Set<Character> hm = new HashSet<>();
        int l = 0;
        int r = 0;
        char[] cArr = s.toCharArray();
        while(r < cArr.length){
            if(hm.contains(cArr[r])){
                hm.remove(cArr[l]);
                l++;
            }
            else{
                hm.add(cArr[r]);
                out = Math.max(out, r-l+1);
                r++;
            }
        }
        return out;
    }
}