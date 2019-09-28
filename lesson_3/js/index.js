'use strict'
/*Задача 1*/
let a = 5; 
let b = 9;
a = a + b;
b = a - b;
a = a - b;
console.log('a =' + ' ' + a);
console.log('b =' + ' ' + b);

/*Задача 2*/
let numberOne = +prompt('Введите первое число');
let numberTwo = +prompt('Введите второе число');
let result;
if (numberOne > numberTwo) {
	result = numberOne;
} else if (numberOne < numberTwo) {
	result = numberTwo;
} else {
	result = 'Числа равны'
}
console.log(result);

/*Задача 3*/
let roomNumber = +prompt('Введите номер квартиры');
if (roomNumber >= 1 && roomNumber <= 20) {
	alert('Первый подъезд');
} else if (roomNumber >= 21 && roomNumber <= 48) {
	alert('Второй подъезд');
} else if (roomNumber >= 49 && roomNumber <= 90) {
	alert('Третий подъезд');
} else {
	alert('Такой квартиры в доме нет!');
}

/*Задача 4*/
let bornYear = +prompt('Введите свой год рождения');
if (2019 - Number(bornYear) >= 16) {
	alert('Добро пожаловать!');
} else {
    alert('Вход запрещен!');
}

/*Задача 5*/
let x = +prompt('Введите значение X');
let resultFunction;
if (x < -2) {
	resultFunction = 3 * (+x * +x);
} else if (2 <= x && x <= 4) {
	resultFunction = -9 * (+x * +x) - 12;
} else {
	resultFunction = 32 + +x;
}
console.log('Резуальтат функции =' + ' ' + resultFunction);