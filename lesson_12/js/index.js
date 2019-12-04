'use strict'

//1

const group = {
    users: ['student 1', 'student 2'],
    sayHi: function (user) {
        console.log(`Hi ${user}`);
    },
    sayHiToAll: function () {
        this.users.forEach(user => this.sayHi(user))
    }
};

group.sayHiToAll();



//2

function callWithTimer(func) {
    return function () {
        console.time('Execution time took');
        let result = func();
        console.timeEnd('Execution time took');
        return result;
    }
}

function testFunction() {
    const arr = new Array(500).fill('test');
    const newArr = arr.map((el, index) => `${el}_${index}`);
    return newArr;
}

const testFunctionWrapper = callWithTimer(testFunction);
const result = testFunctionWrapper();

console.log(result);