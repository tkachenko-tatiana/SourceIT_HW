function get(array){
	let x = [];
	for(let value of array){
		x.push(value.price)
	}
	return x;
}
let shopping= [
 { name: "Морковь", amount: 3, price: 2.25 },
 { name: "Яблоко", amount: 5, price: 5.75 },
 { name: "Груша", amount: 10, price: 10.55 }
 ];
let prices = get(shopping);
let sum = 0;
for(let i=0;i<prices.length;i++){
	sum+=prices[i]
}

console.log(sum);







//p.s. делал поздно, что то мне кажеться я тут намудрил...) хотя работает xD






















