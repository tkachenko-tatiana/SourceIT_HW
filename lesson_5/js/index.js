'use strict'

function calcNum (num) {
    num += "";
    let sum = 0;
    for (let i = 0; i <= num.length-1; i++) {
        sum = sum + +num[i];
    }
    return sum;
}

console.log(calcNum(457));
console.log("=========================================================================");