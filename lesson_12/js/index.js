'use strict'

// #1

const group = {
    users: ['student 1', 'student 2'],
    sayHi: function(user) {
      console.log(`Hi ${user}`);
    },
    sayHiToAll: function() {
      this.users.forEach(user => this.sayHi(user));
    }
  }
   group.sayHiToAll();

   // #2

   function callWithTimer(func) {
    // your magic!
    return function (){
        console.time('Duration');
        let res = func();
        console.timeEnd('Duration');
        return res;
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