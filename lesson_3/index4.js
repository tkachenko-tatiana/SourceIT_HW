'use strict'
let userBirthYear = prompt('введите год своего рождения', '');
let userAge = (2019 - userBirthYear);
alert (userAge)

	if (userAge >= 16){
	alert ('Добро пожаловать!')
}
	else if  (userAge <= 16){
	alert ('Вход на сайт запрещен!')
}