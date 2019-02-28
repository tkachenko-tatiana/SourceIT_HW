'use strict'
// Написать функцию, которая сравнивает 2 массива с примитивами (строки, числа). 
// Массивы [1,2,3] и [1, 3, 2] равны так как содержат одни и те же элементы.
// Функция должна вернуть true, если они равны и false если нет.
let array1 = [1, 2, 3],
    array2 = [1, 3, 2];
function compareArrays(arr1, arr2){
    return arr1.length === arr2.length && arr1.sort().every(function(value, index){
         return value === arr2.sort()[index]});
}
console.log(compareArrays(array1, array2));