'use strict'
// Функция принимает строку, содержащую последовательность круглых, квадратных или фигурных скобок:
// например: "[ ((1 + 2) * 5) + (42).toString() ] }"
let string = prompt('Введите проверяемую строку: ');
function checkStringParentheses(str){
    let chars = str.split(''),
        stack = [],
        openParentheses = ['(', '{', '['],
        closeParentheses = [')', '}', ']'],
        openIndex,
        closeIndex;        
    for (let i = 0;i < chars.length; i++){
        openIndex = openParentheses.indexOf(chars[i]);
        if (openIndex !== -1){            
            stack.push(openIndex);
            continue;
        }
        closeIndex = closeParentheses.indexOf(chars[i]);
        if (closeIndex !== -1){
            openIndex = stack.pop();
            if (closeIndex !== openIndex){
                return false;
            }
        }
    }
    if (stack.length !== 0){
        return false;
    }
    return true;
}
alert(checkStringParentheses(string));