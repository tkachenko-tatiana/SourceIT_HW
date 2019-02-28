'use strict'
// Функция принимает произвольный двумерный массив.
// Пример [[1, 2, 3], [4, 5], [6]]
// Функция должна вернуть сумму его элементов.

let array = [[1, 2, 3,], [4, 5], [6]];
let sum = 0;
function amountArray(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            sum += arr[i][j];
        }
    }
    return sum;
}
console.log('Сумма элементов массива равна: ' + amountArray(array));
