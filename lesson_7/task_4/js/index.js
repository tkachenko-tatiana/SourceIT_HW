'use strict'
// Функция принимает массив покупок вида { id: 1, name: "Морковь", amount: 3, price: 2.50, category: ‘vegetables’ } 
// и название категории.
// Функция должна вернуть продукты только данной категории.
let basket = [
    { id: 1, name: "Морковь", amount: 3, price: 2.50, category: 'овощи' },
    { id: 1, name: "Лук", amount: 3, price: 2.50, category: 'овощи' },
    { id: 1, name: "Банан", amount: 3, price: 2.50, category: 'фрукты' },
    { id: 1, name: "Арбуз", amount: 3, price: 2.50, category: 'фрукты' },
    { id: 1, name: "шампиньены", amount: 3, price: 2.50, category: 'грибы'},
    { id: 1, name: "Вешенка", amount: 3, price: 2.50, category: 'грибы'}
];

function filterByCategory(category, items){
    return items.filter(function(item){
        return item.category === category;
    })  
}
console.log(filterByCategory('грибы', basket));