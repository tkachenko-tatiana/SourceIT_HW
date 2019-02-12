'use strict'
// Пользователь вводит год рождения. Программа показывает количество лет и если лет больше или равно 16, то пишет – «добро пожаловать»,
//  если нет – «вход воспрещен».
let currentTime = new Date();
let year = currentTime.getFullYear();
let birthday = +prompt('Введите год рождения:');
let age = year - birthday;
if (age >= 16)
    alert('Вам ' + age + ' лет. Добро пожаловать!');
    else
        alert('Вам ' + age + ' лет. Вход воспрещен!');