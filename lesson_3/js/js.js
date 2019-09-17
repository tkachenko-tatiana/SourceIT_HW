//Задача 1

let a = 1;
let b = 2;

b = b - a;
a = b + 1;

console.log('Ответ на первую задачу');
console.log('Variable a =', a);
console.log('Variable b =', b);


//Задача 2

/*var numbA = prompt('Введите число а');
var numbB = prompt('Введите число b');

if (numbA > numbB){
    alert(numbA);
} else {
    alert(numbB);
}*/

//Задача 3

/*let c = prompt('Введите номер квартиры');
if(c > 0 && c <= 20){
    alert('Первый подъезд');
}else if (c > 20 && c <= 48){
    alert('Второй подъезд');
}else if (c > 48 && c <= 90){
    alert('Третий подъезд');
} else {
    alert('Таких нет');}*/

//Задача 4

/*let d = prompt('Введите год рождения');
let age = 2019 - d;
if(age >= 16){
    alert('Добро пожаловать');
} else {
    alert('Вход воспрещен!!!');
}*/

//Задача 5

let x = +prompt('Введите число');
if(x < -2){
    x = 3*(x * x) - 8;
}else if(x >= -2 && x <= 4){
    x = -9*(x * x) - 12;
}else {
    x = 32 + x;
}

console.log('Ответ на 5 задачу');
console.log('Вывод функции =', x);
