'use strict'

// Task 1. Свапнуть переменные.
function task1(){

  let a = 1,
      b = 2;

  a = a + b;
  b = a - b;
  a = a - b;

  alert("Число а = " + a + " Число b = " + b);

};


// Task 2. Сравнение двух чисел.
function task2(){

  let answerNumberOne = prompt("Введите первое число", ""),
      answerNumberTwo = prompt("Введите второе число", "");

  if(answerNumberOne > answerNumberTwo){
    alert("Первое число больше!");
  } else if(answerNumberOne < answerNumberTwo){
    alert("Второе число больше!");
  } else if(answerNumberOne == answerNumberTwo){
    alert("Числа одинаковы!");
  };
  
};



// Task 3. В каком подъезде находится квартира.
function task3(){

  let apartmentNumber = prompt("Введите номер квартиры", "");

  if (apartmentNumber >= 1 && apartmentNumber <= 20){
    alert("Квартира находится в первом подъезде!");
  } else if (apartmentNumber >= 21 && apartmentNumber <= 48){
    alert("Квартира находится во втором подъезде!");
  } else if (apartmentNumber >= 49 && apartmentNumber <= 90){
    alert("Квартира находится в третьем подъезде!");
  } else {
    alert("Нет квартиры с таким номером в этом доме:(");
  };

};


// Task 4. Измеритель возраста
function task4(){

  let yearOfBirth  = parseInt(prompt("Введите год рождения", "")),
      thisYear     = new Date().getFullYear(),      
      wrong        = "Вы указали неверный год рождения!",
      yearOfNumber = thisYear - yearOfBirth;

  if(yearOfNumber <= 0){
    alert(wrong);
  } else if(yearOfNumber > 0){
    alert("Ваш возраст - " + yearOfNumber + " лет");
  } else{
    alert(wrong);
  }; 

  if(yearOfNumber >= 16){
    alert("Добро пожаловать на сайт!");
  } else{
    alert("Вход на сайт воспрещен!");
  };

};

// Task 5. Программа, вычисляющая выражение
function task5(){

  let numberX = parseInt(prompt("Введите число", ""));

  if(numberX < -2){
    alert(3 * Math.pow(numberX,2) - 8);
  } else if(-2 <= numberX && numberX <= 4){
    alert(-9 * Math.pow(numberX,2) - 12);
  } else {
    alert(32 + numberX);
  };

};




