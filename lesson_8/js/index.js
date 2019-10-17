'use strict'
/*Задача 1*/
function randomInteger() {
  let arr = [];
  return function() {
    let randomNumber = Math.ceil(Math.random() * 10);

    if (arr.includes(randomNumber)) {
      console.log(Повтор: ${randomNumber});
      console.log(arr);
      arr = []
      return arr;
    } else {
      arr.push(randomNumber);
      return randomNumber;
    }
  }
}
let randomIntegerGenerator = randomInteger();

/*Задача 2*/

function sequence(start = 0, step = 1) {
	let counter = 0;
	return function() {
		counter++;
		return counter == 1 ? start : start = start + step;
	}
}
const generator = sequence(10, 3);
const generator2 = sequence(7, 1);
