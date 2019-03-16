'use strict'


/*1) Верните контекст у setTimeout. Сделать это 2-мя способами*/
function bind(func, context) {
    return function() { // (*)
      return func.apply(context, arguments);
    };
}

const user = {
    name: "John Smith",
    sayHi: function() {
        alert(this.name)
    },
    timeoutSayHi: function() {
        setTimeout(this.sayHi.bind(this), 1000);
        /*or*/
        /*
        setTimeout(function() {user.sayHi();}, 1000);
        */
    }
};

user.sayHi();
user.timeoutSayHi();


/*2) Почините код:*/
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
 
 

/*3) Напишите функцию обертку которая помимо выполнения функции выведет время ее выполнения*/
function callWithTimer(func) {
 // your magic!
    let tmp;
    return function()
    {
        console.time('Duration'); // старт счетчика
        tmp = func();
        console.timeEnd('Duration'); // конец счетчика
        return tmp;
    }
 }

function testFunction() {
 const arr = new Array(500).fill('test');

 const newArr = arr.map((el, index) => `${el}_${index}`);
 return newArr;
}

const testFunctionWrapper = callWithTimer(testFunction);
const result = testFunctionWrapper();

console.log('result: ', result);
