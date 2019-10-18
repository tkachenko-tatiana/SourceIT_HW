'use strict'
/*Задача 1*/
console.log(`------------------- \n Задача 1 \n-------------------`);
let arr = [1, 2, 3];
for(let i = 0; i < arr.length; i++) {
	arr[i] = arr[i] + 3;
}
console.log(arr);

/*Задача 2*/
console.log(`------------------- \n Задача 2 \n-------------------`);
let arr1 = [1, 2, 3];
arr1.push(4, 5);
console.log(arr1);

/*Задача 3*/
console.log(`------------------- \n Задача 3 \n-------------------`);
let array = [1, 2, 3, 4, 5];
let sum = 0;
let result;
for(let i = 0; i < array.length; i++) {
	sum = sum + array[i];
}
result = sum / array.length;
console.log(`Среднее арифметичское массива = ${result}`);

/*Задача 4*/
console.log(`------------------- \n Задача 4 \n-------------------`);
let player = {
	name: 'Vasya',
	surename: 'Ivanov',
	age: 19,
	sex: 'male',
	class: 'Hunter'
}
console.log(`Имя игрока: ${player.name}, Фамилия игрока: ${player.surename}, Возраст игрока: ${player.age}.`);

/*Задача 5*/
console.log(`------------------- \n Задача 5 \n-------------------`);
let keys = ['key1', 'key2', 'key3', 'key4', 'key5'];
let values = ['value1', 'value2', 'value3', 'value4', 'value5'];
let obj = {};
for(let i = 0; i < keys.length; i++) {
	for(let j = 0; j < values.length; j++) {
		obj[keys[i]] = values[j];
	}
}
console.log(obj);

/*Задача 6*/
console.log(`------------------- \n Задача 6 \n-------------------`);
let num = 50;
let iteration = 0;
while (num <= 1000) {
	iteration = iteration + 1;
	num = num * 2;
	console.log(`Итерация: ${iteration}, Число: ${num}`);
}
console.log(`Всего итераций: ${iteration}`);

/*Задача 7*/
console.log(`------------------- \n Задача 7 \n-------------------`);
function sumArguments(a, b, c, d, e, f) {
	let sum = 0;
	for(let i = 0; i < arguments.length; i++) {
		sum = sum + arguments[i];
	}
	console.log(`Сумма всех аргументов = ${sum}`);
}
sumArguments(1, 2, 3, 22, 33, 44);