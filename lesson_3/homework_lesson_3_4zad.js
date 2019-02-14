let birthYear = parseInt(prompt("Введите год рождения"));

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

if (age>=16) {
    alert( "Добро пожаловать" );
} else  {
    alert( "Вход воспрещен");
}
