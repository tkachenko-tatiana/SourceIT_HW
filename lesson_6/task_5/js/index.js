'use strict'
// В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.

        // Превый выриант

// let date = '2025-12-31';
// function convertDate(dateString){
//     let newArray = [];
//     let newDate;
//     let arrayDate = dateString.split('-');
//     for (let i= arrayDate.length-1; i >= 0; i--){
//         newArray.push(arrayDate[i]); 
//     }
//     return newDate = newArray.join('.');    
// }
// console.log(convertDate(date));

        // Второй вариант

// let date = '2025-12-31';
// function convertDate(dateString){
//     let newDate;    
//     let arrayDate = dateString.split('-');
//     arrayDate.reverse();
//     newDate = arrayDate.join('.');    
//     return  newDate;
// }
// console.log(convertDate(date));

        // Третий вариант

let date = '2025-12-31';
let convertDate = (dateString) => dateString.split('-').reverse().join('.');  
console.log(convertDate(date));