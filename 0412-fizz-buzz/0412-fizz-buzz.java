class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> ans = new ArrayList<>();
        for(int i = 1; i <=n; i++){
            ans.add(i % 15 == 0 ? "FizzBuzz" : i % 5 == 0 ? "Buzz" : i % 3 == 0 ? "Fizz" : String.valueOf(i));
        }
        return ans;
    }
}