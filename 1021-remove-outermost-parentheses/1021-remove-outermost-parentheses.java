class Solution {
    public String removeOuterParentheses(String s) {
        StringBuilder str = new StringBuilder();
        int matches = 0;
        for(char c : s.toCharArray()){
            if(c = '('){
                matches++;
                if(matches != 1){
                    str.append(c);
                }
            }
            else{
                matches--;
                if(matches != 0){
                    str.append(c);
                } 
            }
        }
        return str;
    }
}