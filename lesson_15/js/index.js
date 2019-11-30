'use strict'

/*Задача №1*/
function randomNumberHandler() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      let randomNumber = Math.ceil(Math.random() * 10);
      if(randomNumber < 6) {
        resolve(`Успех! Сгенерировано число - ${parseInt(randomNumber, 10)}`);
      } else {
        reject(new Error(`Ошибка! Сгенерировано число - ${parseInt(randomNumber, 10)}.`));
      }
    }, 2000);
  })
}
randomNumberHandler().then(res => console.log(res))

/*Задача №2*/

function delay(ms) {
  return new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve();
  }, ms)
  })
}

delay(2000).then(() => alert("Hello!"));

/*Задача №3*/

function squarePow(num) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(parseInt(num *=num));
    }, 3000);
  }).then(() => {
    setTimeout(() => {num *=num}, 3000)
  })
}

squarePow(5);