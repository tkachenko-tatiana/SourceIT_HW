'use strict'
// Написать функцию которая принимает 2 массива и возвращает объединенный массив.

         // Первый вариант

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

function joinArrays(arr1, arr2){
    let joinArr =[];
    joinArr.push(...arr1, ...arr2);
    
return joinArr;
}
console.log(array1,array2);
alert(joinArrays(array1, array2));

        // Второй вариант

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// function joinArrays(arr1, arr2){
//     let joinArr =[];
//     joinArr = arr1.concat(arr2);
    
// return joinArr;
// }
// alert(joinArrays(array1, array2));
