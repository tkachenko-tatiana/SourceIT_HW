'use strict'

// #1

function randomInteger() {
    let arr = [];

    return function () {
        let rand = Math.ceil(Math.random() * 10);
        if (arr.includes(rand)) {
            arr.push(rand);
            return arr;
        } else {
            arr.push(rand);
            return rand;
        }
    }
}

const randomIntegerGenerator = randomInteger();

// #2

function sequence(start = 0, step = 1) {
    let count = 0;

    return function () {
        count++;
        return count === 1 ? start : start += step;
    }
}

const generator1 = sequence(10, 3);
const generator2 = sequence(7, 1);
