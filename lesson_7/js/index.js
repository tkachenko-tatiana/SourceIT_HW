'use strict'
/*Задача 1*/
function isSpam(text, spamWords) {
	let arrSpamWords = [];
	for(let i = 0; i < spamWords.length; i++) {
		arrSpamWords.push(spamWords[i].toLowerCase());
	}
	if (arrSpamWords.includes(text.toLowerCase())) {
		console.log('Yes!');
	} else {
		console.log('No!');
	}
}
let text = 'car';
let spamWords = ['Car', 'Key', 'Tissues', 'Glasses', 'Window'];
isSpam(text, spamWords);

/*Задача 2*/
function getCapitalizedNamesString(names) {
	let newNames = '';
    for (let i = 0; i < names.length; i++) {
    	if (i == names.length - 1) {
    	    newNames = newNames + names[i][0].toUpperCase() + String(names[i]).toLowerCase().substr(1) +'. ';
        } else {
        	newNames = newNames + names[i][0].toUpperCase() + String(names[i]).toLowerCase().substr(1) +', ';
        }
    }
    console.log(newNames);
}
getCapitalizedNamesString(['PeTia', 'VASIA', 'DiMa', 'MoNICA', 'VaLeRa']);

/*Задача 3*/
function chooseDuty(names) {
	let randomName = Math.ceil((Math.random() * names.length));
	console.log(`${names[randomName - 1]} сегодня дежурит в классе!`);
}
chooseDuty(['Petia', 'Vasia', 'Dima', 'Monica', 'Valera']);

/*Задача 4*/
function cuteText(str, n) {
	let result = '';
	let arrSymbols = str.split('');
	if (arrSymbols.length > n) {
		for(let i = 0; i <= n; i++) {
			result = result + arrSymbols[i];
		}
		console.log(`${result} ...`)
	} else {
		result = str;
		console.log(result);
	}
}
let str = "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
let n = 20;
cuteText(str, n);

/*Задача 5*/
function convertDate(date) {
let arrDate = date.split('-');
let reverseDate = '';
for(let i = arrDate.length - 1; i >= 0; i--) {
	reverseDate = reverseDate + arrDate[i] + '-';
}
reverseDate = reverseDate.substr(0, reverseDate.length - 1);
console.log(reverseDate);
}
convertDate('2025-12-31');

/*Задача 6*/
function trueLength(array) {
	let filtered = array.filter(function(elements) {
		return elements != null;
	});
console.log(filtered);
}
let array = [1, 2, 3, 4, , , , , , 10];
trueLength(array);

/*Задача 7*/
function calculateCart(items) {
	let sum = 0;
	items.forEach( function(item) {
		sum = sum + item.amount * item.price;
	});
	console.log(`Общая стоимость товаров: ${sum}$`)
}
let productCart = [{name: "Морковь", amount: 3, price: 2.50}, {name: "Томаты", amount: 2, price: 6.50}, {name: "Лук", amount: 4, price: 3}];
calculateCart(productCart);

/*Задача 8*/
function findPriceById(id, items) {
items.forEach( function(item) {
	let productCost = 0;
	if(item.id == productId) {
		productCost = item.price;
		console.log(`Цена продукта: ${productCost}$`);
	}
});
}
let productId = 1;
let productArr = [{id: 1, name: "Морковь", amount: 3, price: 2.50 }, {id: 2, name: "Картошка", amount: 1, price: 1.50}, {id: 3, name: "Капуста", amount: 3, price: 3.50}];
findPriceById(productId, productArr);

/*Задача 9*/
function filterByCategory(category, items) {
let productList = [];
items.forEach( function(item, index) {
	if(item.category == productsCategory) {
		productList.push(item.name);
	}
});
console.log(productList);
}
let productsCategory = 'Мясо';
let productsArr = [{id: 1, name: "Курица", amount: 3, price: 2.50, category: "Мясо"}, {id: 2, name: "Говядина", amount: 1, price: 1.50, category: "Мясо"}, {id: 3, name: "Свинина", amount: 3, price: 3.50, category: "Мясо"}, {id: 4, name: "Морковь", amount: 3, price: 2.50, category: "Овощи"}, {id: 5, name: "Картошка", amount: 1, price: 1.50, category: "Овощи"}, {id: 6, name: "Капуста", amount: 3, price: 3.50, category: "Овощи"}];
filterByCategory(productsCategory, productsArr);

/*Задача 10*/
function compareArrays(arr1, arr2) {
	let flag;
	if(arr1.length != arr2.length) {
		flag = 'false';
	} else {
		arr1.sort();
		arr2.sort();
		for(let i = 0; i < arr1.length; i++) {
			if(arr1[i] == arr2[i]) {
				flag = 'true';
			} else {
				flag = 'false';
				break;
			}
		}
	}
	console.log(`Результат сравнения массивов: ${flag}`);
}
let array1 = [1, 2, 3, 'Dima', 'Ivan', 14, 13];
let array2 = [3, 2, 1, 'Ivan', 'Dima', 13, 14];
compareArrays(array1, array2);

/*Задача 11*/
function sum(arr) {
	let sum = 0;
	let concatArr = [].concat(...arr);
	concatArr.forEach( function(item, index) {
		sum = sum + item;
	});
	console.log(sum);
}
sum([[1, 2, 3], [1, 2, 3], [1, 2, 3]]);