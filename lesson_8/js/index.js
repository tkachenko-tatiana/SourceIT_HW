'use strict'
//1

function getRandomNumber() {

    let arr = [];

    return function() {

        let a = Math.ceil(Math.random()*10);

        if (!arr.includes(a)) {
            arr.push(a);
            return a;
        }
        return arr;

    }

}


const randomNumber = getRandomNumber();

//2

function sequence(start, step) {
    let a = start;
    let b = step;
    
    return function gen() {
       
        if(b == undefined) {
            b = 1;
        }
        a = a+b;
        return a;
    }
};

const generator = sequence(10, 3);
const generator2 = sequence(50, 25);
const generator3 = sequence(100);

console.log(generator());
console.log(generator());

console.log(generator2());
console.log(generator2());

console.log(generator3());
console.log(generator3());
console.log(generator3());
console.log(generator3());
