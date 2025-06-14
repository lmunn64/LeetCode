class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        numStack = []
        for i in range(len(tokens)):
            op = tokens[i]
            if len(op) == 1:
                if ord(op[0]) == ord('+'):
                    first = numStack.pop()
                    second = numStack.pop()
                    numStack.append(second + first)
                elif ord(op[0]) == ord('/'):
                    first = numStack.pop()
                    second = numStack.pop()
                    numStack.append(int(float(second) / first))
                elif ord(op[0]) == ord('*'):
                    first = numStack.pop()
                    second = numStack.pop()
                    numStack.append(second * first)
                elif ord(op[0]) == ord('-'):
                    first = numStack.pop()
                    second = numStack.pop()
                    numStack.append(second - first)
                else:
                    numStack.append(int(tokens[i]))
            else:
                numStack.append(int(tokens[i]))
        return numStack[0]