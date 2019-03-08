'use strict'

console.log('task_1');
function makeSpyOn() {

    function amount() {
        return amount.calls++;
    }
    amount.calls = 0;
    return amount;
}

const spy = makeSpyOn();
spy();
spy();
spy();
spy();
spy();

console.log(spy.calls);

console.log('==============================================================');

console.log('task_2');

function makeCalculator() {

    let a;
    let b;

    function input() {
        a = +prompt('input a', '');
        b = +prompt('input b', '');
        return console.log(a, b)
    }

    function sum() {
        return a + b;
    }

    function mul() {
        return a * b;
    }

    function sub() {
        return a - b;
    }

    let obj = {};

    obj.input = input;
    obj.sum = sum;
    obj.mul = mul;
    obj.sub = sub;

    return obj;

}

let calculator = makeCalculator();
calculator.input();
console.log(calculator.sum());
console.log(calculator.mul());
console.log(calculator.sub());

console.log('==============================================================');

console.log('task_3');



console.log('==============================================================');

console.log('task_4');


function generate() {

    let numbersArr = [];
    function gen () {
        let randomNum = Math.round(1 + Math.random() * 9);
        if (numbersArr.indexOf(randomNum) != -1) {
            return console.log(numbersArr);
        } else {
            console.log(randomNum);
            numbersArr.push(randomNum);
        }
    }
    return gen;
}
let generateNumbers = generate();
generateNumbers();
generateNumbers();
generateNumbers();
generateNumbers();
generateNumbers();
generateNumbers();
generateNumbers();
generateNumbers();
generateNumbers();
generateNumbers();
generateNumbers();
generateNumbers();
generateNumbers();
generateNumbers();

console.log('==============================================================');

console.log('task_5');

function sequence(start, step) {
    start || 0;
    step || 1;
    let sum = start;
    return function () { 
        return sum += step;
    }
}

let generator = sequence(10, 1);
let generator1 = sequence(10,15);

console.log(generator());
console.log(generator());
console.log(generator());
console.log(generator1());
console.log(generator1());
console.log(generator1());