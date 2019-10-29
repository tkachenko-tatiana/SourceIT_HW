'use strict'
let arr = [1, 2, 3, 10, 20];
    for (let i = 0; i < 5; i++) {
        arr[i] = arr[i] + 3;
    };

/*
arr [0] = arr [0] +3;
arr [1] = arr [1] +3;
arr [2] = arr [2] +3;
arr [3] = arr [3] +3;
arr [4] = arr [4] +3;
*/

console.log(arr);

// задание 2

let arr1 = [1, 2, 3];
arr1.push(4, 5);
console.log(arr1);

// задание 3

let arr2 = [2, 5, 8, 10, 13, 17, 25];
let resultSum = arr2.reduce((sum, current) => sum + current, 0);
let average = resultSum / arr2.length;
console.log(arr2);
console.log('Среднее арифметическое значение элементов массива ' + average.toFixed(2));

// задание 4

let user = {
    name: 'Abraham',
    surname: 'Lincoln',
    age: 210
};
/*
let e = ' '; //пробелы получилось вставить только таким способом
console.log(user.name + e + user.surname + e + user.age + e + 'years');
// или так
alert(user.name + e + user.surname + e + user.age + e + 'years');*/

let phrase = `${user.name} ${user.surname} ${user.age} years`;
console.log(phrase);


// задание 5

let keys = ['key1', 'key2', 'key3', 'key4', 'key5'];
let values = ['value1', 'value2', 'value3', 'value4', 'value5'];

let final = {};

for(let y = 0; y < keys.length; y++){
        final[keys[y]] = values[y];
    } 

console.log(final);


// Задание 6


let num = 1;
let numberOfIterations = 0;

while (num < 1001) {
    numberOfIterations = numberOfIterations + 1;
    num = num * 2;
}
console.log(`Всего итераций: ${numberOfIterations}`, `число num "=" ${num}`);

// Задание 7



function calculateTheAmount() {
	let numb = 0;
	for(let i = 0; i < arguments.length; i++) {
		numb = numb + arguments[i];
	}
	console.log(`Сумма равна: ${numb}`);
}
calculateTheAmount(1, 2, 3, 4, 5, 10, 20, 50);


