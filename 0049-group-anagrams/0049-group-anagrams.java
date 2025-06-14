class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, List<String>> hm = new HashMap<>();
        for(String s : strs){
            String[] split = s.split("");
            Arrays.sort(split);
            String joined = String.join("", split);
            hm.computeIfAbsent(joined, k -> new ArrayList<>()).add(s);
        }
        List<List<String>> out = new ArrayList<>(hm.values());
        return out;
    }
}