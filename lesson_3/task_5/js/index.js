'use strict'
// Написать программу, которая вычисляет выражение:
let x = -3;
let result;
if (x < -2)
    result = 3 * x * x - 8;
    else if (x >= -2 && x <= 4)
        result = -9 * x * x - 12;
        else
            result = 32 + x;
console.log(result);
