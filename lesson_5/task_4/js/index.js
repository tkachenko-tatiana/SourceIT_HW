'use strict'
// Написать функцию которая принимает массив и возвращает новый массив который содержит только четные элементы первого.

        // Первый вариант

let array = [1, 2, 3, 4, 5];
function getEvenElements(arr){
    let resArray = [];
    for (let i = 0; i < arr.length; i++){
        arr[i] % 2 === 0 ? resArray.push(arr[i]) : ''; 
    }
    return resArray;
}
alert(getEvenElements(array));

        // Второй вариант

// let array = [1, 2, 3, 4, 5];
// function getEvenElements(arr){
//     let resArray = [];
//     for (let i = 0; i < arr.length; i++){
//         arr[i] % 2 === 0 ? resArray[resArray.length] = (arr[i]) : ''; 
//     }
//     return resArray;
// }
// alert(getEvenElements(array));
