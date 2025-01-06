#include <bits/stdc++.h>
using namespace std;
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int maximum = 0;
        int j = 1;
        int i = 0;

        while(j < prices.size()){
            int current = prices.at(j) - prices.at(i);
            if(maximum < current)
                maximum = current;
            if(prices.at(j) < prices.at(i))
                i = j;
            j++;
        }
        return maximum;
    }
};