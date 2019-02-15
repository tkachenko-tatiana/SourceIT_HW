'use strict'
// ..............1

let a = 1;
let b = 2;
let a = a + b; // 1 + 2 = 3
let b = a - b; // 3 - 2 = 1
let a = a - b; // 3 - 1 = 2

//...............2

let One = Number(prompt('Введите первое число?'));
let Two = Number(prompt('Введите второе число?'));
if (One > Two) {
	alert("Первое")
}
else {
	alert("Второе")
}

//...............3

let Flat = prompt('Введите номер квартиры?');
let message = (Flat < 20) ? 'Первый' :
  			  (Flat < 48) ? 'Второй' :
  			  (Flat < 90) ? 'Третий' :
  			  'Такой кватриры нет в этом доме';
alert( message );

//...............4

let age = prompt('Возраст?');
let message = (16 >= age) ? 'Вход воспрещен' : 'Добро пожаловать';
alert( message );

//...............5

