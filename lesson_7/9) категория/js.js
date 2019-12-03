let list =[
 { id: 1, name: "Морковь",
 amount: 3,
 price: 2.50,
 category: "овощи"
 },
 { id: 1, name: "Яблоки",
 amount: 10,
 price: 21.70,
 category: "фрукты"
 },
 { id: 1, name: "Футболки",
 amount: 2,
 price: 220,
 category: "одежда"
 }
]

let shirts = list.filter((shops)=>{
	return shops.category === 'одежда'
});

console.log(shirts);
	
	