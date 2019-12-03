let pro = [ { 
	id: 1, 
	name: "Морковь",
	amount: 3,
	price: 2.50 }
	
	]
 

let x = [];
 let getPrice = function(elem){
 	x.push(elem.price)
 }
	pro.forEach(getPrice);
 console.log('Price: ' + x);