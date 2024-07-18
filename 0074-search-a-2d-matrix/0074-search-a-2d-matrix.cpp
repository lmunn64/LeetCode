class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int colHigh, colLow, rowHigh, rowLow, colMid, rowMid;

        colHigh = matrix[0].size() - 1;
        colLow = 0;

        rowHigh = matrix.size() - 1;
        rowLow = 0;

        while(rowLow <= rowHigh){
            rowMid = rowHigh + rowLow /2;
            if(matrix[rowMid][0] == target){
                return true;
            }
            else if(matrix[rowMid][0] < target && matrix[rowMid][matrix[rowMid].size() - 1] > target){
                break;
            }
            else if(matrix[rowMid][0] < target){
                rowLow = rowMid + 1;
            }
            else{
                rowHigh = rowMid - 1;
            }
        }

        while(colLow <= colHigh){
            colMid = colHigh + colLow /2;
            if(matrix[rowMid][colMid] == target){
                return true;
            }
            else if(matrix[rowMid][colMid] < target){
                colLow = colMid+1;
            }
            else{
                colHigh = colMid-1;
            }
        }
        return false;

    }
};