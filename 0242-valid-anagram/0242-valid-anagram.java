class Solution {
    public boolean isAnagram(String s, String t) {
        char[] sArr = s.toCharArray();
        char[] tArr = t.toCharArray();
        int[] sCount = new int[26];
        int[] tCount = new int[26];
        for(char letter : sArr){
            sCount[letter - 'a']++;
        }
        for(char letter : tArr){
            tCount[letter - 'a']++;
        }

        return Arrays.equals(tCount, sCount);
    }
}