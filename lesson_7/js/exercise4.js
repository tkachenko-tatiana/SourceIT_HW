const items = [{
    id: 1,
    name: 'Морковь',
    amount: 3,
    price: 2.50,
    category: 'Vegetables'
},
{   
    id: 2,
    name: 'Огурец',
    amount: 2,
    price: 3.50,
    category: 'Vegetables'
},
{   
    id: 3,
    name: 'Помидор',
    amount: 1,
    price: 4,
    category: 'Vegetables'
},
{   
    id: 4, 
    name: 'Апельсин',
    amount: 7,
    price: 1,
    category: 'Fruits'
},
{   
    id: 5,
    name: 'Груша',
    amount: 6,
    price: 7.50,
    category: 'Fruits'
}];

function filterByCategory(category, items) {
    return prod = items.filter(function(products) {
        if(products.category == category){
            return products;
        }
    });
}

const res = filterByCategory('Vegetables', items);
console.log("На вашем экране товары выбранной Вами категории: ", res);