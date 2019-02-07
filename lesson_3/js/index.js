'use strict'
//first task
let a = 1; 
let b = 2;

a=a+b-(b=a);

alert(a);
alert(b);



//second task
let firstNumber = prompt('Enter first number', '');
let secondNumber = prompt('Enter second number', '');

  if (firstNumber > secondNumber) {
    alert ('The biggest number is ' + firstNumber);
  } else if (firstNumber < secondNumber) {
    alert ('The biggest number is ' + secondNumber);
  } else {
    alert ('Both numbers are equal to each other =)');
  }



//third task
let flat = prompt('Enter number of flat', "");

let entrance = (flat <= 0) ? 'Error!!!' :
  (flat < 21) ? '1st Entrance' :
  (flat < 49) ? '2nd Entrance' :
  (flat <= 90) ? '3rd Entrance' :
  'Not found';

alert( entrance );



//fourth task
let age = prompt('Ваш возраст', '');

(age >= '16') ?
   alert('Добро пожаловать' + ' Вам ' + age + ' лет') : alert('Вход воспрещен' + ' Вам ' + age + ' лет');


   

// //fifth task

let x = Number(prompt('Enter x', '')); 

if (x < -2) {
  alert(3*pow(x, 2) - 8);
}
else if (x >= -2 && x <= 4) {
  alert( -9*pow(x, 2) - 12);
}
else {
  alert(32 + x);
}