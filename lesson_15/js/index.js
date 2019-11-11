'use strict'

/*Задача №1*/

let promise = new Promise(function(resolve, reject) {
  function randomNumberHandler() {
  setTimeout(() => {
  	let randomNumber = Math.ceil(Math.random() * 10);
  	if(randomNumber < 6) {
  		resolve(console.log(`Успех! Сгенерировано число - ${parseInt(randomNumber, 10)}`));
  	} else {
  		reject(new Error(`Ошибка! Сгенерировано число - ${parseInt(randomNumber, 10)}.`));
  	}
  }, 2000);
}
randomNumberHandler();
});

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
	let promise = new Promise(function(resolve, reject) {
		setTimeout(() => {
			resolve(console.log(parseInt(num *=num)));
		}, 3000);
	}).then(() => {
		setTimeout(() => {console.log(num *=num)}, 3000)
	})
}

squarePow(5);