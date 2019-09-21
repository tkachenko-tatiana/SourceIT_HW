let age = prompt ('Enter your age');

if  (age<16) {
     alert ('Access denied, but you can stay because I dont know how to stop you:(')}
else { 
    alert ('Access granted')
}

alert ('Задача 1')
let a = 1;
let b = 2;
b = b-a;
a = a+a;
alert (a);
alert (b);

alert ('Задача 2')
let c = +prompt ('Введите первое число');
let d = +prompt ('введите второе число');

if  (c>d) {
    alert (c);
}
if (d>c) { 
    alert (d);
}
if (c==d) { 
    alert ('числа равны');
}
alert ('Задача 3')

let answer = prompt('Введите номер квартиры');
let message = (answer<20) ? 'Первый подъезд' : (answer<48) ? 'Второй подъезд' :(answer<90) ? 'третий подъезд' : 'Ошибка' ;
alert (message);

alert ('Задача 5') 

let x = +prompt ('Введите значение x = ')
if  (x<-2) {alert (3 * x^2 - 8) }
else if  (-2<=x<=4) {
    alert (-9 * x^2 - 12 )
}
else {
    alert (32 + x)
}
