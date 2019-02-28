'use strict'
// Заполнить элементы побочной диагонали матрицы 1, а все остальные 0.
let array = [];
let n =6;
for (let i = 0; i < n; i++ ){
    array[i] = [];
    for (let j = 0; j < n; j++){
        if (i + j == n - 1){
            array[i][j] = 1;
        }else{
            array[i][j] = 0;
        }               
    }
}
console.table(array);