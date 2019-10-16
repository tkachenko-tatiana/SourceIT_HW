'use strict'
let array = [];

for (let i = 0; i < 5; i++) {
	array[i] = [];	
    for (let j = 0; j < 5; j++) {
        if (j == 4 - i) {
            array[i][j] = 1;
        } else {
            array[i][j] = 0;
        }
    }
}
console.log(array);
