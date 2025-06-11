class Solution {
    public String longestCommonPrefix(String[] strs) {
        String output = "";
        int minLen = 201;
        for(String s : strs){
            minLen = Math.min(minLen, s.length());
        }
        for(int i = 0; i <= minLen; i++){
            String s = strs[0].substring(0,i);
            for(String str : strs){
                String sub = str.substring(0,i);
                if(!sub.equals(s)){
                    return output;
                }
            }
            output = s;
        }

        return output;
    }
}