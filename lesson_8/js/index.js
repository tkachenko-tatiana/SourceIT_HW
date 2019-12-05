'use strict'

//1
function getRandomNumber() {
    let arr = [];
    return function () {
        let numbers = Math.ceil(Math.random() * 10);
        if (!arr.includes(numbers)) {
            arr.push(numbers);
            return numbers;
        }
        return arr;
    }
}

const randomNumber = getRandomNumber();

//2
function sequence(start, step) {
    let one = start;
    let two = step;

    return function gen() {

        if(two == undefined) {
            two = 1;
        }
            one = one + two;
        return one;
    }
};

const generator = sequence(10, 3);
const generator2 = sequence(50, 25);
const generator3 = sequence(100);

console.log(generator());
console.log(generator());