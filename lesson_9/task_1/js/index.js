'use strict'
// Реализовать функцию шпиона которая будет сохранять количество вызовов функции

// const spy = makeSpyOn();
// spy();
// spy();

// console.log(spy.calls); // 2
function makeSpyOn(){
    let calls = 0;
    return function(){
        calls++;
        spy.calls = calls;
    }
}
const spy = makeSpyOn();
spy();
spy();
spy();
spy();
spy();
console.log(spy.calls);