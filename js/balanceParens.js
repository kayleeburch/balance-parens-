balanceParens = (str) => {
    let stack = []
    let remove = []
    for (let i = 0; i < str.length; i++) {
        if(str[i] === '('){
            stack.push(i)
        } else if(str[i] === ')' && stack.length > 0){
            stack.pop()
        } else if(str[i] === '(' || str[i] === ')' && stack.length === 0){
            remove.push(i)
        }
    }

    if(stack.length > 0){
        for(let num in stack){
            remove.push(stack[num])
        }
    }

    let result = []
    for(let i = 0; i < str.length; i++){
        if(remove.indexOf(i) !== -1){
            continue
        } else {
            result.push(str[i])
        }
    }
    return result.join('')
}

module.exports = { balanceParens }