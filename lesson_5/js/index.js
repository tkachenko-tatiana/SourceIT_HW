'use strict'

// Task 1. ================================================= 

// method 1 ====
const calcNum1 = (num) => {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += +num[i];
  }
  return sum;
}

const task1m1 = () => {
  const sumInput = calcNum1(prompt('Введите несколько и более цифр', ''));
  alert('Сумма цифр: ' + sumInput);
}
// end

// method 2 ====
const calcNum2 = (num) => {
  let sum = 0;
  let string = num;
  for (let symbol of string) { // проходит по элементам 
    sum += parseInt(symbol); // добавляет к переменной sum элементы из string
  }
  return sum;
}

const task1m2 = () => {
  const sumInput = calcNum2(prompt('Введите несколько и более цифр', ''));
  alert('Сумма цифр: ' + sumInput);
}
// end

// method 3 ====
const calcNum3 = (num) => {
  return num.toString().split('').reduce((a, b) => {
    return +a + +b;
  })
  // toString() возвращает строку, представляющую объект. 
  // split('') разбивает объект String на массив().
  // .reduce сводит массив к одному значению.
}

const task1m3 = () => {
  const sumInput = calcNum3(prompt('Введите несколько и более цифр', ''));
  alert('Сумма цифр: ' + sumInput);
}
// end


// Task 2. =================================================
const calcNumUnequivocal = (num) => {
  let sum = 0;
  let str = num;
  for (let symbol of str) {
    if (sum + parseInt(symbol) <= 9) {
      sum += parseInt(symbol);
    }
  }
  return sum;
}

const task2 = () => {
  const sumInput = calcNumUnequivocal(prompt('Введите несколько и больше цифр', ''));
  alert('Сумма однозначных цифр: ' + sumInput);
}

// Task 3. =================================================
const joinArrays = (arr1, arr2) => {
  let sum = arr1.concat(arr2);
  return sum;
}
const task3 = () => {
  const newArray = joinArrays([1, 2, 3], [4, 5, 6]);
  console.log(newArray);
}

// Task 4. =================================================
const getElements = (arr) => {
  let arrEven = [];
  for (let symbol of arr) {
    let remainder = symbol % 2;
    if (remainder == 0) {
      arrEven.push(symbol);
    }
  }
  return console.log(arrEven);
}
const task4 = () => {
  getElements([1, 2, 3, 4, 5]);
}

// Task 5. =================================================
const userData = (arr) => {
  let arrName = [];
  for (let key of arr) {
    if (key["age"] >= 18) {
      arrName.push(key["name"]);
    } // возможно имелось ввиду вывести ключ/значение, но сделал так
  }
  return console.log(arrName);
}
const task5 = () => {
  userData([
    { id: 1, name: "Иван", age: 35 },
    { id: 2, name: "Петя", age: 17 },
    { id: 3, name: "Гена", age: 19 },
    { id: 4, name: "Вася", age: 15 },
    { id: 5, name: "Толя", age: 21 },
  ]);
}

// Task 6*. =================================================

const bigArr = (...argum) => {
  let fullArr = [];

  argum.forEach((item) => item.map((num) => fullArr.push(num)));
  
  return fullArr;
}

const task6 = () => {
  console.log(bigArr([1,2,3], [4,5,6], [7,8,9], [10,11,12], [13,14,15], [16,17,18], [19,20,21], [22,23,24]));
}

// Task 7*. =================================================

const checkBrackets = (string) => {

  let brackets = '[]{}()',
      check = [],
      bracketsPosition,
      element;

  for(let i = 0; element = string[i]; i++){
    bracketsPosition = brackets.indexOf(element);

    if(bracketsPosition === -1) {
      continue;
    }

    if(bracketsPosition % 2 === 0) {
      check.push(bracketsPosition + 1);
    } else {
      if(check.length === 0 || check.pop() !== bracketsPosition) {
        return false;
      }
    }

  }

  return check.length === 0;

}


const task7 = () => {
  console.log(checkBrackets('[ ((1 + 2) * 5) + (42).toString() ] }')); // false
  console.log(checkBrackets('[ ((1 + 2) * 5) + (42).toString() ]')); // true
}