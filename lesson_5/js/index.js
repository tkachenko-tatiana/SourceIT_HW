'use strict'

//LESSON 5

//ФУНКЦИЯ, КОТОРАЯ СКЛАДЫВАЕТ ЦИФРЫ ЧИСЛА

function culcNum(num) {
  let result = 0;
  num = "" + num;      // преобразование в строку
  let arr = [...num];  // объявление массива и разбитие массива на элементы
    for (let i = 0; i < arr.length; i++) {
      result = result + Number(arr[i]);
    }
  return result;
}
console.log(culcNum(135));

//forEach

  let num = prompt("Введите число: ", "");
  let result = 0;
  num = "" + num;
  let arr = [...num];
      arr.forEach(function(item, i, arr) {
         console.log(result = result + Number(item));
      });

// reduce

  const arr = [1, 3, 5]
    arr.reduce((prev, elem) => {
       console.log("prev: ", prev);
       console.log("elem: ", elem);
    return prev + elem; // prev: 1, elem: 3, prev: 4, elem: 5
  });

/*ФУНКЦИЯ, КОТОРАЯ СКЛАДЫВАЕТ ЦИФРЫ ЧИСЛА
ДО ТЕХ ПОРБ ПОКА НЕ ОСТАНЕТСЯ ОДНОЗНАЧНОЕ ЧИСЛО И ВЕРНЕТ ЕГО*/

function culcNum(num) {
  let result = 0;
  num = "" + num;      // преобразование в строку
  let arr = [...num];  // объявление массива и разбитие массива на элементы
      for (let i = 0; i < arr.length; i++) {
        result = result + Number(arr[i]);
            }
         let y = result;
         let temp = 0;
         let sum = 0;
            while (y > 0) {
               temp = (y % 10);  // Остаток от деления на 10 / 6, 3, 5
               y = Math.floor(y / 10);  // Округление остатка от деления / 53, 5, 0
               sum = sum + temp;  // Сумма остатков от деления / 5 + 3 + 6
      }
  return sum;
}
console.log(culcNum(536));   // 5

/*ФУНКЦИЯ, КОТОРАЯ ПРИНИМАЕТ ДВА МАССИВА И ВОЗВРАЩАЕТ
ОБЪЕДИНЕННЫЙ МАССИВ*/

const arr1 = [1,2,3];
const arr2 = [4,5,6];
  function joinArrays(arr1, arr2) {
    return [arr1] + "," + [arr2];
  }
const newArray = joinArrays([arr1], [arr2]);
console.log(newArray); // 1,2,3,4,5,6

/*ФУНКЦИЯ, КОТОРАЯ ПРИНИМАЕТ МАССИВАИ ВОЗВРАЩАЕТ
НОВЫЙ МАССИВ, КОТОРЫЙ СОДЕРЖИТ ТОЛЬКО ЧЕТНЫЕ ЭЛЕМЕНТЫ ПЕРВОГО*/

function getEvenElements (arr) {
  const evenNum = arr.filter(function(number) {
    return (number % 2 == 0);  // если true
  })
    return evenNum;
}
console.log(getEvenElements([1,2,3,4,5])); // 2, 4

/*ФУНКЦИЯ ПРИНИМАЕТ МАССИВ ОБЪЕКТОВ ВИДА {id: 1, name: "Иван" , age: 42}
ФУНКЦИЯ ВОЗВРАЩАЕТ МАССИВ ИМЕН ПОЛЬЗОВАТЕЛЕЙ КОТОРЫМ
ИСПОЛНИЛОСЬ 18 ЛЕТ*/

const users = [{
    id: 1, name: "Иван", age: 42
}, {
    id: 2, name: "Петр", age: 16
}, {
    id: 3, name: "Михаил", age: 32
}];
function findUsers18() {
  let userWithAge = users.filter((item) => {
      return item.age >= 18;
  });
  return userWithAge;
}
console.log(findUsers18());
