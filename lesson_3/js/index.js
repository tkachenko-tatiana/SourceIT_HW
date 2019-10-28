'use strict'
// task 1

let a = 1;
let b = 2;

a = a + b; //3
b = a - b; //1
a = a - b; //2


// task 2

let number1 = +prompt('введите первое число', '');
let number2 = +prompt('введите второе число', '');

	if (number1 > number2){
	alert(number1)
}
	else if (number1 < number2){
	alert(number2)
}
	else if(number1 === number2){
	alert ('Числа равны')
} ;

// task 3

let apartmentNumber = +prompt('введите номер квартиры', '');

	if (1 <= apartmentNumber && apartmentNumber <= 20){
        alert ('Эта квартира находится в первом подъезде')
}
	else if  (apartmentNumber <= 48 && apartmentNumber >= 21 ){
	    alert ('Эта квартира находится во втором подъезде')
}
	else if (apartmentNumber <= 90 && apartmentNumber >= 49){
	    alert ('Эта квартира находится в третьем подъезде')
}
	else if (apartmentNumber > 91){
	    alert ('Такой квартиы нет в этом доме')
} ;

// task 4

let userBirthYear = +prompt('введите год своего рождения', '');
let userAge = (2019 - userBirthYear);
alert (userAge)

	if (userAge >= 16){
	alert ('Добро пожаловать!')
}
	else if  (userAge <= 16){
	alert ('Вход на сайт запрещен!')
};

// task 5

let x = +prompt('введите значение для x', '');
let y;

	if (x < -2){
	y = (x * x * 3) - 8
}
	else if  (x >= -2 && x <= 4){
	y = ( x * x * (-9)) - 12
}
	else if (x >= 5){
	y = ((32) + x)
}
    alert (y);
    