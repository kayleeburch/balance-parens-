def balance_parens(str):
    stack = []
    remove = [] #keep track of indexes
    for i, x in enumerate(str):
        if x == '(':
            stack.append(i)
        elif x == ')' and len(stack) > 0:
            stack.pop()
        elif (x == '(' or x == ')') and len(stack) == 0:
            remove.append(i)
    
    if len(stack) > 0:
        for num in stack:
            remove.append(num)
    
    result = []
    for i, x in enumerate(str):
        if i in remove:
            continue
        else:
            result.append(x)
            
    return ''.join(result)
        
