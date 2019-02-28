'use strict'
// Функция принимает массив покупок вида { name: "Морковь", amount: 3, price: 2.50 }. Функция должна вернуть сумму всех покупок.
// Используйте один из перебирающих методов массивов
let basket = [
    {name: "Морковь", amount: 3, price: 2.50},
    {name: "Лук", amount: 2, price: 5.25}, 
    {name: "Капуста", amount: 1, price: 7.00},
    {name: "Томат", amount: 4, price: 12.5},
    {name: "Картофель", amount: 3, price: 7.00}
];
//         Первый вариант

// function calculateBasket(items){
//     let sum = 0;
//     items.forEach(function(item){        
//         sum += item.amount * item.price;       
//     })
//     return sum;
// }
// console.log('Сумма всех покупок: ' + calculateBasket(basket) + ' грн.');

        // Второй вариант

function calculateBasket(items){
return items.reduce((sum, item) => {
    sum += item.amount * item.price ;
    return sum;
  }, 0);
}
console.log('Сумма всех покупок: ' + calculateBasket(basket) + ' грн.');