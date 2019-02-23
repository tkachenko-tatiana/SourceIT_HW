'use strict'

//LESSON 3

// 1.

let a = 1;
let b = 2;

a = a + b;
b = a - b;
a = a - b;

alert("a = " + a + " b = " + b);

//2.

let num1 = prompt("Введите первое число: ", "");
let num2 = prompt("Введите второе число: ", "");

num1 == num2 ? alert("Первое и второе числа равны") :
num1 > num2 ? alert(num1) : alert(num2);

//3.

let num = prompt("Введите номер квартиры: ", "");
num <= 20 ?  alert("Это первый подъезд") :
num <= 48 ?  alert("Это второй подъезд") :
             alert("Это третий подъезд");

//4.
let now = 2019;
let year = prompt("Введите год рождения: ", "");
let yearsOld = 0;
yearsOld = now - year;
yearsOld >= 16 ?  alert("Вам " + yearsOld + " лет. " + "Добро пожаловать!") :
                  alert("Вам " + yearsOld + " лет. " + "Вход воспрещен!")
