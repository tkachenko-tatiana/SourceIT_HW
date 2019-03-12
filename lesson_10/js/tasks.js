'use strict'
/*first task*/
/*1) */
const user = {
  name: "John Smith",
  sayHi: function() {
  alert(this.name)
  },
  timeoutSayHi:setTimeout(function() {
  user.sayHi() 
  }, 1000)
  };
user.sayHi();
/*2)*/
const user = {
  name: "John Smith",
  sayHi: function() {
  alert(this.name)
  },
  timeoutSayHi: function() {
  setTimeout(user.sayHi.bind(user), 1000);
  }
  };
user.sayHi();
user.timeoutSayHi();
/*second task*/
const group = {
   users: ['student 1', 'student 2'],
   sayHi: function() {
    console.log(`Hi ${this.users}`);
   },
   sayHiToAll: function() {
    this.users.forEach(() => {
    this.sayHi()
   })
   }
   }
  group.sayHiToAll();