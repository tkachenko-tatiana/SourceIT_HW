'use strict'
/*Задача 1*/
const spy = makeSpyOn();
let counter = 0;
function makeSpyOn() {
	let calls = 0;
    return function() {
    	counter = calls + 1;
    	return ++calls;
    }
}
spy();
spy();
console.log(counter);

/*Задача 2 - 3*/
function makeBuffer() {
	let stringBuffer = '';
	return function(value) {
		if (value && value != 'reset') {
			stringBuffer += value; 
		} else if (value === 'reset') {
			stringBuffer = '';
		} else {
			return stringBuffer;
		}
	}
}
let buffer = makeBuffer();

buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

/*Задача 4*/
let calculator = {
	input : {
		a : +prompt('Введите число A:'),
		b : +prompt('Введите число B:')
	},
	sum : function() {
		let result = calculator.input.a + calculator.input.b;
		return result;
	},
	mul : function() {
		let result = calculator.input.a * calculator.input.b;
		return result;
	},
	sub : function() {
		let result = calculator.input.a - calculator.input.b;
		return result;
	}
}