class Solution {
    public boolean isValid(String s) {
        Stack<String> parenths = new Stack<>();
        String[] split = s.split("");
        System.out.print(split[0]);
        for(int i = 0; i < split.length; i++){
            if(split[i].equals("{") || split[i].equals("[") || split[i].equals("(")){
                parenths.push(split[i]);
            }
            else if(parenths.empty() || 
                (split[i].equals("}") && !parenths.pop().equals("{")) ||
                (split[i].equals(")") && !parenths.pop().equals("("))|| 
                (split[i].equals("]") && !parenths.pop().equals("["))){
                return false;
            }
        }
        return parenths.empty();
    }
}