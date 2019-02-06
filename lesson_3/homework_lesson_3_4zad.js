let a = parseInt(prompt("Введите год рождения"));

let b = new Date().getFullYear();
let c = b - a;

if (c>=16) {
    alert( "Добро пожаловать" );
} else  {
    alert( "Вход воспрещен");
}
