let items = [{
        id:1,
        name: "Морковь",
        amount: 3,
        price: 3.00
    },
    {
    	id:2,
        name: "Картошка",
        amount: 3,
        price: 3.40
    },
    {
    	id:3,
        name: "Лук",
        amount: 2,
        price: 2.00
    }
];

function findPriceById(id,items) {
  let obj = items.find((el) => el.id === id);
  return obj.price;
}


let res = findPriceById(3,items);
console.log(res);