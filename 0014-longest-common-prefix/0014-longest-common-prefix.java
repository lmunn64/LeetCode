class Solution {
    public String longestCommonPrefix(String[] strs) {
        String sb = "";
        int minLen = 200;
        for(String str : strs){
            minLen = Math.min(minLen, str.length());
        }
        String comp = strs[0];
        for(int i = 0; i < minLen + 1; i++){
            for(String s : strs){
                if(!s.substring(0, i).equals(comp.substring(0, i))){
                    return sb;
                }
            }
            sb = comp.substring(0,i);
        }
        return sb;
    }
}