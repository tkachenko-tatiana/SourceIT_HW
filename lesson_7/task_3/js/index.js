'use strict'
// Функция принимает массив покупок вида  { id: 1, name: "Морковь", amount: 3, price: 2.50 } и id продукта.
// Функция должна вернуть цену этого продукта.
let basket = [
    { id: 1, name: "Морковь", amount: 3, price: 5.50 },
    { id: 2, name: "Лук", amount: 3, price: 11.50 },
    { id: 3, name: "Чеснок", amount: 3, price: 15.50 },
    { id: 4, name: "Картофель", amount: 3, price: 9.50 },
    { id: 5, name: "Капуста", amount: 3, price: 7.50 },
    { id: 6, name: "Буряк", amount: 3, price: 8.50 }
];

function findPriceById(id, items){
    let price;
    items.find((items) =>{        
        if (items.id === id){
            price = items.price;}
        })
        return price;
}
console.log('Цена продукта : ' + findPriceById(4, basket));