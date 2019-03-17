"use strict";

// Task 1 | Method 1 ===========================================
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

// Task 1 | Method 2 ===========================================
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

// Task 2 ===========================================
const group = {
  users: ["student 1", "student 2"],
  sayHi: function(user) {
    console.log(`Hi ${user}`);
  },
  /* // Method 1
  sayHiToAll: function() {
    this.users.forEach((user) => {
      this.sayHi(user);      
    });
  }
  */
  /* // Method 2
  sayHiToAll: function() { 
    const self = this;
    this.users.forEach(function(user) {
      self.sayHi(user);      
    });
  }
  */
  // Method 3
  sayHiToAll: function() {
    this.users.forEach(
      function(user) {
        this.sayHi(user);
      }.bind(this)
    );
  }
};

group.sayHiToAll();

// Task 3 ===========================================
function callWithTimer(func) {
  return function() {

    console.time("Duration");
    let result = func.call(this);
    console.timeEnd("Duration");

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

// Task 4* ===========================================
// Пока не получается. Нужно через сallback реализовать?
function afterSomeTime(func, time) {
  return function() {
    setTimeout(func, time);
  };
}

function flightSuperman() {
  console.log(`
=
  =       =
    =   =   =   =>
      =       =
      `);
}

const flySuperman = afterSomeTime(flightSuperman, 1000);

// flySuperman();
// flySuperman();
