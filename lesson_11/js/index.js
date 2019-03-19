'use strict'

// Верните контекст у setTimeout. Сделать это 2-мя способами

//1 способ
const user = {
  name: "John Smith",
  sayHi: function() {
    alert(this.name);
  },
  timeoutSayHi: function() {
    setTimeout(this.sayHi.bind(this), 1000);
  }
};
user.sayHi();
user.timeoutSayHi()

//2 способ
const user = {
  name: "John Smith",
  sayHi: function() {
    alert(this.name);
  },
};

setTimeout(() => {
    user.sayHi();
  }, 1000),

user.sayHi();





// // Почините код:

const group = {
   users: ['student 1', 'student 2'],
   sayHi: function(user) {
     console.log(`Hi ${user}`);
   },
   sayHiToAll: function() {
     this.users.forEach((user) => {
       this.sayHi(user)
     })
   }
 }
group.sayHiToAll();






// Напишите функцию обертку которая помимо выполнения функции выведет время ее выполнения


function callWithTimer(func) {
  return function(arguments) {
    let res = func.apply(this, arguments);
    return res;
  }
}
//Для трека времени можно использовать
console.time('Duration'); // старт счетчика
console.timeEnd('Duration'); // конец счетчика

function testFunction() {
 const arr = new Array(500).fill('test');

 const newArr = arr.map((el, index) => `${el}_${index}`);
 return newArr;
}

const testFunctionWrapper = callWithTimer(testFunction);
const result = testFunctionWrapper();

console.log('result: ', result)