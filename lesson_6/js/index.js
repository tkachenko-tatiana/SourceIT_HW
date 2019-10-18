'use strict'

/*Матрица*/
let arr = [];

for (let i = 0; i < 4; i++) {
	arr[i] = [];	
    for (let j = 0; j < 4; j++) {
        if (j == 3 - i) {
            arr[i][j] = 1;
        } else {
            arr[i][j] = 0;
        }
    }
}
console.table(arr);