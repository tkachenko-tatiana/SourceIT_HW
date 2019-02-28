'use strict'
// Функция принимает массив имен. Имена могут быть в любом виде: пЕтя, Артём, катя, МаШа. Функция должна вернуть строку 
// с нормализованными именами, разделенными запятой и пробелом: "Петя, Артём, Катя, Маша"

        // Первый вариант

// let arrayNames = ['оксана', 'мАрина', 'ольГа','екАтеРина', 'ДИАНА', 'виКТОРИя'];
// let newString;
// function getCapitalizedNamesString(names){
//     let newArray = [];
//     for (let i = 0; i < names.length; i++){
//         newArray.push(names[i].charAt(0).toUpperCase() + names[i].substring(1).toLowerCase());
//     }
//     return newString = newArray.join(', ');
// }
// console.log(getCapitalizedNamesString(arrayNames));

        // Второй вариант

let arrayNames = ['оксана', 'мАрина', 'ольГа','екАтеРина', 'ДИАНА', 'виКТОРИя'];
let getCapitalizedNamesString = (names) =>{
    return names.map((name) => name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()).join(', ');
}
console.log(getCapitalizedNamesString(arrayNames));