'use strict'

// #1

function randomInteger() {
    let arr = [];

    return function () {
        let rand = Math.ceil(Math.random() * 10);
        arr.push(rand);

        let flag = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] === rand) {
                flag = true;
                break;
            }
        }

        return flag ? arr : rand;
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