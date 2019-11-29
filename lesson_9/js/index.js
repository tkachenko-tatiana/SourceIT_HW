'use strict'

//1

function makeSpyOn(myFunc) {
	let count = 0;
	return function spyFunc() {
		spyFunc.calls = count++;
		myFunc();
	}
}

const spy = makeSpyOn();
spy();
spy();

console.log(spy.calls)

//2

function makeBuffer() {
	let storage = '';
	return function newFunc(piece) {

		if (arguments.length == 0) {
			return storage;
		}
		else {
			storage += piece;
		}
		newFunc.reset = function() {
			storage = '';
		}
	};
};

let buffer = makeBuffer();
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно');

console.log(buffer());
buffer.reset();
console.log(buffer());


//3

function makeCalculator() {
	let var1;
	let var2;

	function input() {
		var1 = +prompt('Введите первое число', '');
		var2 = +prompt('Введите второе число', '');
	}

	function sum() {
		return var1 + var2;
	}

	function mul() {
		return var1 * var2;
	}

	function sub() {
		return var1 - var2;
	}

	return{
		input: input,
		sum: sum,
		mul: mul,
		sub: sub,
	};
};

const calculator = makeCalculator();
calculator.input();

