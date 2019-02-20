'use strict'
// Написать функцию которая принимает 2 массива и возвращает объединенный массив.

            // Первый вариант

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// function joinArrays(arr1, arr2){
//     let joinArr;
//     for (let i=0; i <arr2.length; i++){
//         arr1.push(arr2[i]);
//     }
// return arr1;
// }
// alert(joinArrays(array1, array2));

            // Второй вариант

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// function joinArrays(arr1, arr2){
//     let joinArr;
//     for (let i=0; i <arr2.length; i++){
//         arr1[arr1.length] = arr2[i];
//     }
// return arr1;
// }
// alert(joinArrays(array1, array2));

        // Третий вариант

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

function joinArrays(arr1, arr2){
    arr1.push(...arr2);
    
return arr1;
}
alert(joinArrays(array1, array2));