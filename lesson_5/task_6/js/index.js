'use strict'
// Написать функцию которая принимает неограниченное число массивов и возвращает объединенный массив.
let a =[1, 2, 3, 4, 5];
let b =[6, 7, 8, 9, 10];
let c =[11, 12, 13, 14, 15];
let d =[16, 17, 18, 19, 20];
let e =[21, 22, 23, 24, 25];
function concatArrays(){
    let newArray = [];
    for (let i = 0; i < arguments.length; i++){
        newArray.push(...arguments[i]);
    }
    return newArray;    
}
alert('Новый массив: ' + concatArrays(a,b,c,d,e));