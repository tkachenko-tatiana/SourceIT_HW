'use strict'
// Функция принимает массив. Функция должна вернуть "настоящую длинну массива" Пример: [1,2,3,4,5] => 5
//                [1,2,3,4, ... пустота... 10] => 5
// Используйте один из перебирающих методов массивов.
let arr = [1, 2, 3, 4, 5,,,,,,,, 13, 14, 15];
function trueLength(array){
    let result = array.filter(item => item);
    return result.length;
}
console.log(trueLength(arr));

