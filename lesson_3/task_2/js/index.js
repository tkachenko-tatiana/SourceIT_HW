'use strict'
// Пользователь вводит два числа. Найти и вывести максимальное из двух чисел.  Учтите вариант равенства чисел.
let numberOne = +prompt('Введите первое число:');
let numberTwo = +prompt('Введите второе число:');

if (numberOne == numberTwo)
    alert('Числа равны!')
    else if (numberOne > numberTwo) 
        alert('Максимальное первое число: ' + numberOne)
    else 
        alert('Максимальное второе число: ' + numberTwo)
