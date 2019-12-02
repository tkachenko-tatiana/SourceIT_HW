'use strict'
const group = {

	users: ['student 1', 'student 2'],

	sayHi: function(user) {
	  console.log(`Hi ${user}`);
	},

	sayHiToAll: function() {
	  this.users.forEach(user => this.sayHi(user))
	}
}
  
   group.sayHiToAll();

// 2

function callWithTimer(func) {

	return function innerFunc(){
		console.time('time');
		let resActFunction = func();
		console.timeEnd('time');
		return resActFunction;
	};

};

function testFunction() {
	const arr = new Array(4000000).fill('test');

	const newArr = arr.map((el,index) => `${el}_${index}`);
	return newArr;
}

const testFunctionWrapper = callWithTimer(testFunction);
const result = testFunctionWrapper();

console.log('result:', result);