'use strict'
// Написать функцию, которая складывает цифры числа до тех пор пока не останется однозначное число и вернет его.
// Например: 196 => 1+9+6 = 16 (не однозначное) => 1 + 6 = 7 (однозначное).

let number = prompt('Введите число: ');
function calcSum(num){    
    let strNumber = String(num);
    let sum = 0;
    for (let i = 0; i < strNumber.length; i++){
        sum += +strNumber[i];              
    } 
    return sum < 10 ? sum : calcSum(sum);        
}
alert(calcSum(number));
