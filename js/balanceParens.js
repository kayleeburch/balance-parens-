balanceParens = (str) => {
    let noMatch = []
    let result = []
    for(let i = 0; i < str.length; i++) {
        let char = str[i]
        if(char === '('){
            noMatch.push(i)
        }
    }
    console.log('all parentheses', noMatch)
    for(let i = 0; i < str.length; i++) {
        let char = str[i]
        if(char === ')' && noMatch.length > 0 && i > noMatch[0]){
            console.log(str[i], i)
            noMatch.shift()
        } else if(char === ')' || (char === ')' && i < noMatch[0]) || (char === ')' && noMatch.length == 0)){
            result.push(i)
        }
    }
    console.log(noMatch)
    console.log(result)
}

module.exports = { balanceParens }