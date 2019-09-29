'use strict'

let myArr = [];

for (let i = 0; i < 4; i++) {
    myArr[i] = [];
    for (let j = 0; j < 4; j++) {
        if (j == 3 - i) {
            myArr[i][j] = 1;
        } else {
            myArr[i][j] = 0;
        }
    }
}

console.table(myArr);