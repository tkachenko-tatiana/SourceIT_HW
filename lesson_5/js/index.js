'use strict'

// Task one

let arr = [4, 2, 9];
for (let i=0; i<3; i++) {
    arr[i] = arr[i] + 3;
}
console.log (arr);

// Task two

let arr1 = [1, 2, 3];
arr1.push(4,5);
console.log (arr1);

// Task three

let array = [1, 15, 3, 5, 2, 1]
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
}
let result = sum / array.length;
console.log (result);

// Task four

let user = {
    name: 'Kendrick',
    surname: 'Lamar',
    age: '32'
}
console.log (user.name, user.surname, user.age)

// Task five

let keys = ['key1', 'key2', 'key3', 'key4', 'key5'];
let values = ['value1', 'value2', 'value3', 'value4', 'value5'];
let obj = {};

for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
}
console.log (obj);

//Task six

let num = 1;
let itter = 0;
while(num < 1000) {
    itter = itter + 1;
    num = num * 2;
}
console.log ('Amount of itterations = ', itter, 'Num = ', num);

// Task seven

function sumOfArguments() {
	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		sum = sum + arguments[i];
	}
	console.log('Сумма аргументов равна ', sum);
}
sumOfArguments(11, 31, 51, 13, 2,); 
