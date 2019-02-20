'use strict'
// Написать функцию, которая складывает цифры числа. 
let numeric = prompt('Введите число: ');
function calcSum(num){
    let sum = 0;
    for (let i = 0; i < num.length; i++){
        sum += +num[i];        
    }
    return sum;
}
alert('Сумма числа - ' + numeric + ' равна: ' + calcSum(numeric));