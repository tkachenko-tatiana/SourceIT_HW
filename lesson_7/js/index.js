'use strict'

// 1. Функция принимает массив. Функция должна вернуть "настоящую длинну массива" Пример: [1,2,3,4,5] => 5
// [1,2,3,4, ... пустота... 10] => 5
// Используйте один из перебирающих методов массивов.

let numArr = [1,2,3,4,      10];
function realLengthArr(array){
    let lengthArr = array.filter((n) => !!n);
    return lengthArr.length;
}
console.log(realLengthArr(numArr));




// 2. Функция принимает массив покупок вида { name: "Морковь", amount: 3, price: 2.50 }. Функция должна вернуть сумму всех покупок.
// Используйте один из перебирающих методов массивов


function receipt(products){
	let sum = 0;
	products.forEach(function(product){
		sum = sum + product.amount * product.price;       
	})
	return sum;
}

const products = [{
	name: "Carrot",
	amount: 3,
	price: 2.5,
}, {
	name: "Apple",
	amount: 2,
	price: 3,
}, {
	name: "Banana",
	amount: 5,
	price: 6,
}, {
	name: "Tomatoe",
	amount: 6,
	price: 4,
}, {
	name: "Onion",
	amount: 2,
	price: 3,
}, {
	name: "Lemon",
	amount: 1,
	price: 2.5,
}, {
	name: "Potatoe",
	amount: 5,
	price: 3,
}, {
	name: "Juice",
	amount: 1,
	price: 1.5,
}, {
	name: "Bread",
	amount: 2,
	price: 2,
}];


console.log('Сумма всех покупок: ' + receipt(products));


// 3. Функция принимает массив покупок вида  { id: 1, name: "Морковь", amount: 3, price: 2.50 } и id продукта.
// Функция должна вернуть цену этого продукта.

function getPrices(products) {
	const prices = products.map(function(product){
		console.log("Product: ", product);
		return product.price;
	})
	return prices;
}

const products = [{
	id:1,
	name: "Carrot",
	amount: 3,
	price: 2.5,
}, {
	id:2,
	name: "Apple",
	amount: 2,
	price: 3,
}, {
	id:3,
	name: "Banana",
	amount: 5,
	price: 6,
}, {
	id:4,
	name: "Tomatoe",
	amount: 6,
	price: 4,
}, {
	id:5,
	name: "Onion",
	amount: 2,
	price: 3,
}, {
	id:6,
	name: "Lemon",
	amount: 1,
	price: 2.5,
}, {
	id:7,
	name: "Potatoe",
	amount: 5,
	price: 3,
}, {
	id:8,
	name: "Juice",
	amount: 1,
	price: 1.5,
}, {
	id:9,
	name: "Bread",
	amount: 2,
	price: 2,
}];

const arrPrices = getPrices(products);
console.log("Prices: ", arrPrices);


// 4. Функция принимает массив покупок вида { id: 1, name: "Морковь", amount: 3, price: 2.50, category: ‘vegetables’ }  и название категории.
// Функция должна вернуть продукты только данной категории.


function findByCategory(category, products){
	return products.filter((product) => product.category == category);
}

const products = [{
	category: 'vegatables' ,
	id:1,
	name: "Carrot",
	amount: 3,
	price: 2.5,
}, {
	category: 'fruits' ,
	id:2,
	name: "Apple",
	amount: 2,
	price: 3,
}, {
	category: 'fruits' ,
	id:3,
	name: "Banana",
	amount: 5,
	price: 6,
}, {
	category: 'vegatables' ,
	id:4,
	name: "Tomatoe",
	amount: 6,
	price: 4,
}, {
	category: 'vegatables' ,
	id:5,
	name: "Onion",
	amount: 2,
	price: 3,
}, {
	category: 'citrus' ,
	id:6,
	name: "Lemon" ,
	amount: 1,
	price: 2.5,
}, {
	category: 'vegatables' ,
	id:7,
	name: "Potatoe",
	amount: 5,
	price: 3,
}, {
	category: 'drinks' ,
	id:8,
	name: "Juice",
	amount: 1,
	price: 1.5,
}, {
	category: 'bakery' ,
	id:9,
	name: "Bread",
	amount: 2,
	price: 2,
}];


const res = findByCategory('vegatables', products);
console.log('My products:', res);


// 5. Написать функцию, которая сравнивает 2 массива с примитивами (строки, числа). 
// Массивы [1,2,3] и [1, 3, 2] равны так как содержат одни и те же элементы.
// Функция должна вернуть true, если они равны и false если нет.

// let strArr = [1, 2, 3];
// let numArr = [1,2,3];
  
// function checkArr(strArr, numArr) {
	

	
// }





// 6. Функция принимает произвольный двумерный массив.
// Пример [[1, 2, 3], [4, 5], [6]]
// Функция должна вернуть сумму его элементов.

let newArr = [[1, 2, 3,], [4, 5], [6]];

function sumArr(arr) {
  let sumArray = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sumArray += arr[i][j];
    }
  }
  return sumArray;
}

console.log('Сумма: ' + sumArr(newArr));




// 7. Заполнить элементы побочной диагонали матрицы 1, а все остальные 0.


const arr = [];

for (let i = 0; i <= 5; i++) {
	arr[i] = [];
	for (let j = 0; j <= 5; j++) {
		arr[i][j] = i + j === 5 ? 1 : 0 ;
	}
}

console.table(arr);