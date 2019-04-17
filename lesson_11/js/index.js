'use strict'

// LESSON 10/11

// 1. Верните контекст у setTimeout. Сделать это 2-мя способами.

// Способ 1
const userOne = {
  name: "Method 1: John Smith",
  sayHi: function() {
    console.log(this.name);
  },
  timeoutSayHi: function() {
    setTimeout(this.sayHi.bind(this), 1000);
  }
};

userOne.sayHi();
userOne.timeoutSayHi();

// Способ 2
const userTwo = {
   name: "Method 2: John Smith",
   sayHi: function() {
      console.log(this.name);
  },
  timeoutSayHi: function() {
      let self = this;
      setTimeout(function() {
         self.sayHi();
    }, 1000);
  }
};

userTwo.sayHi();
userTwo.timeoutSayHi();

// 2. Почините код:

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

// 3. Напишите функцию обертку которая помимо выполнения функции
// выведет время ее выполнения

function callWithTimer(func) {
  return function() {
    console.time("Продолжительность");
    let result = func.call(this);
    console.timeEnd("Продолжительность");
    return result;
  };
}
function testFunction() {
    const arr = new Array(500).fill("test");
    const newArr = arr.map((el, index) => `${el}_${index}`);
    return newArr;
}
const testFunctionWrapper = callWithTimer(testFunction);
const result = testFunctionWrapper();

console.log("result: ", result);
