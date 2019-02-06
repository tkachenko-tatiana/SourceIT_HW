'use strict'

let number_1 = +prompt("Введите число номер 1", "");
let number_2 = +prompt("Введите число номер 2", "");

if (number_1 > number_2) {
    alert(number_1);
} else if (number_2 > number_1) {
    alert(number_2)
} else {
    alert("Числа равны")
}