class Solution {
    public String removeOuterParentheses(String s) {
        Stack<Character> stack = new Stack<>();
        String[] strArr = s.split("");
        int matches = 0;
        for(int i = 0; i< strArr.length; i++){
            if(strArr[i].equals("(")){
                matches++;
                if(matches == 1){
                    strArr[i] = "";
                }
            }
            else{
                matches--;
                if(matches == 0){
                    strArr[i] = "";
                } 
            }
        }
        s = String.join("", strArr);
        return s;
    }
}