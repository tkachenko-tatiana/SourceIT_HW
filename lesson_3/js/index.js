'use strict'

/*Даны две переменные - a и b.
Например, они равны a=1; b=2.
Необходимо поменять местами эти числа (то есть a=2, b=1).
Но не используя третью переменную.*/

let a = 1, b = 2;
console.log(a, b);
b = [a, a = b][0];
console.log(a, b);


/*Пользователь вводит два числа.
Найти и вывести максимальное из двух чисел.
Учтите вариант равенства чисел.*/

let firstNumber = Number(prompt('Please input first number'));
let secondNumber = Number(prompt('Please input second number'));

if (firstNumber > secondNumber) {
    alert(firstNumber);
} else if (firstNumber < secondNumber) {
    alert(secondNumber);
} else {
    alert("numbers equals");
}


/*В первом подъезде квартиры с 1 по 20.
Во втором с 21 по 48. В третьем с 49 по 90.
Пользователь вводит номер квартиры.
Программа должна указать в каком подъезде находится данная квартира.
*/

let house = Number(prompt('Please input number of apartment'));

if ((house <= 20) && (house != 0)) {
    alert("house apartment 1");
} else if ((house >= 21) && (house <= 48)) {
    alert("house apartment 2");
} else if ((house >= 49) && (house <= 90)) {
    alert("house apartment 3");
} else {
    alert("wrong number of apartment");
}


/*Пользователь вводит год рождения.
Программа показывает количество лет и если лет больше или равно 16, то пишет – «добро пожаловать»,
если нет – «вход воспрещен».*/

let userAge = Number(prompt('Please input  your birth year.'));
userAge = 2019 - userAge;

alert("your age is " + userAge);

if (userAge >= 16) {
    alert("добро пожаловать");
} else {
    alert("вход воспрещен");
}


/*Написать программу, которая вычисляет выражение:*/


let x = Number(prompt('Please input x.'));

if (x < -2) {
    alert(3 * Math.pow(x, 2) - 8);
} else if (x >= -2 && x <= 4) {
    alert(-9 * Math.pow(x, 2) - 12);
} else {
    alert(32 + x);
}