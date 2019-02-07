'use strict'

let x = +prompt('Введите X', '');
let answer;

if (x < -2) {
    answer = 3 * x * x - 8;
} else if (x >= -2 && x <= 4) {
    answer = -9 * x * x - 12;
} else {
    answer = 32 + x;
}
alert(answer);
