'use strict'
function makeRandom() {
    let arr = [];
    return function () {
        let randomNumber = Math.floor(Math.random() * Math.floor(11));
        if (arr.includes(randomNumber)) {
            console.log('repeat!')
            return arr
        } else {
            console.log(arr)
            arr.push(randomNumber)
        }
    }
}

const randomArr = makeRandom();

function sequence(start = 0, step = 1) {
    return function () {
        start = start + step
        return start
    }
}
const generator = sequence(10, 3);
const generator2 = sequence(7, 1);