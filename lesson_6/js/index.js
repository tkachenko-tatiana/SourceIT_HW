'use strict'


let arr = [];
let n = 4;

for (let i = 0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
        if (3 - i == j) {
            arr[i][j] = 1;
        } else
            arr[i][j] = 0;
    }
}

console.table(arr);
