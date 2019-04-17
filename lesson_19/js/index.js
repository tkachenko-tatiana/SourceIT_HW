'use strict'

// LESSON 19

// Задачи на Promise

// 1. Напишите функцию, которая будет генерировать случайные числа
// от 1 до 10. Сделайте так, чтобы сгенерированное число было
// задержкой функции setTimeout в секундах.  Оберните все это в промис.
// Пусть промис выполнится успешно, если сгенерировано число от 1 до 5,
// и с ошибкой - если от 6 до 10.

let promise = new Promise((resolve, reject) => {

setTimeout(randomNumberHandler, 2000);

   function randomNumberHandler() {
      let number = Math.floor(Math.random() * 10);
      if (number <=5)
         resolve('result')
            else if (number >=5)
               reject('error');
      console.log(number);
   };
});

promise.then(
  result => console.log('result'),
  error => console.log('error')
);


// 2. Напишите функцию delay(ms), которая возвращает промис,
// переходящий в состояние resolved через ms миллисекунд.

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(ms)
  });
};
delay(2000).then(() => alert("Hello!"));



// 3.  Напишите функцию которая принимает число и и через 3 секунды
// возводит число в квадрат и еще раз возводит результат в квадрат
// через 3 секунды. Промежуточные и конечный результат вывести в консоль.

let num = prompt("Введите число: ", );


function squarePow (num) {

  let result = Math.pow(num, 2);
  return result;

}

console.log(squarePow(num));


// 4. Напишите функцию, которая возвращает промис, в котором расположена
// функция setTimeout со случайно задержкой от 1 до 5 секунд. Пусть промис
// своим результатом возвращает эту задержку.

const delay = () => {
  const time = (Math.floor(Math.random() * 5) + 1) * 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time)
   }, time)
 })
};

// const sum = (a, b) = a+b;

delay(3000).then((ms) => {
  console.log('Delay: ' ms);
  const res = sum(1,2);
  console.log('Sum: ', res);
  return res;
})

.then((res) => {
  console.log ("!!!", res)
})


// Задачи на AJAX
//
// API URL: https://my-json-server.typicode.com/tkachenko-tatiana/shop-api
// Инструкция по работе с сервером: https://www.npmjs.com/package/json-server
//
// 1. Получить с сервера продукт по id

function getProductById(id) {
fetch (`${API_URL}/products`)
.then((resp) => {
  return resp.json()
   })
    .then((result) => {
    return result;
  })
}

const getResult = async () => {
  const product = await getProductById(8);
  console.log(product)
}

Promise.all([
  getProductById(1)
  getProductById(5)
  getProductById(7)
])
