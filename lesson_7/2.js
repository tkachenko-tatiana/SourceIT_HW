let items = [{
        name: "Морковь",
        amount: 3,
        price: 3.00
    },
    {
        name: "Картошка",
        amount: 3,
        price: 3.40
    },
    {
        name: "Лук",
        amount: 2,
        price: 2.00
    }
];

function calculateCart(items) {
  	let sum=0;
    let newArr = items.map((items)=>items.price);
    for (price in newArr){
    	sum = sum + newArr[price];
    }
    return sum;  
}


let res = calculateCart(items);
console.log("Сумма всех покупок равна: " + res);