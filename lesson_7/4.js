let items = [{
        id:1,
        name: "Морковь",
        amount: 3,
        price: 3.00,
        category: 'vegetables'
    },
    {
    	id:2,
        name: "Картошка",
        amount: 3,
        price: 3.40,
        category: 'vegetables'
    },
    {
    	id:3,
        name: "Яблоко",
        amount: 2,
        price: 2.00,
        category: 'fruits'
    }
];

function filterByCategory(category,items) {
 return items.filter((el) => el.category == category);
}

let res = filterByCategory('vegetables',items);
console.log(res);
