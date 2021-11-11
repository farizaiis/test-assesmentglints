// - create function to determine the given expression is correct or not
// - expression will be string of open bracket nor close bracket e.g ({[[()]]})
// - your function should determine the expression is it correct or not

// examples:
// - ({[]}) => true
// - ([][]{})=> true
// - ({)(]){[} => false
// - [)()] => false

let validBracket = function(inputBracket) {
    if(inputBracket.lenth === 0) {
        return true
    }

    const newArr = []

    const listBracket = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }

    for(let i = 0; i < inputBracket.length; i++) {
        if(inputBracket[i] === '{' || inputBracket[i] === '(' || inputBracket[i] === '[') {
            newArr.push(inputBracket[i])
        } else {
            if(newArr[newArr.length - 1] === listBracket[inputBracket[i]]) {
                newArr.pop()
            } else {
                return false
            }
        }
    }

    return newArr.length === 0
}

console.log(validBracket("([][]{})"))