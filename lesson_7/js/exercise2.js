const items = [{
    name: 'Морковь',
    amount: 3,
    price: 2.50
},
{   name: 'Огурец',
    amount: 2,
    price: 3.50
},
{   name: 'Помидор',
    amount: 1,
    price: 4
},
{   name: 'Апельсин',
    amount: 7,
    price: 1
},
{   name: 'Груша',
    amount: 6,
    price: 7.50
}];

function calculateCart(items) {
    let sum = 0;
    items.filter(function(item){
        return sum += item.amount * item.price;
    });
    return sum;
}


const res = calculateCart(items);
console.log("Сумма всех покупок: " , res);