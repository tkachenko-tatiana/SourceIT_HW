const items = [{
    id: 1,
    name: 'Морковь',
    amount: 3,
    price: 2.50
},
{   
    id: 2,
    name: 'Огурец',
    amount: 2,
    price: 3.50
},
{   
    id: 3,
    name: 'Помидор',
    amount: 1,
    price: 4
},
{   
    id: 4, 
    name: 'Апельсин',
    amount: 7,
    price: 1
},
{   
    id: 5,
    name: 'Груша',
    amount: 6,
    price: 7.50
}];

function findPriceById(id, items) {
    const res = items.find((item) => {
        return item.id === id;
    })

    return res.price;
}


const res = findPriceById(3, items);
console.log("Цена данного продукта = ", res, "UAH");