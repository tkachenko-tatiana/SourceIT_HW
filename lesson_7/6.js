
let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;

function sumOfArr(arr) {
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
}

return sum;

}

let res = sumOfArr(arr);
console.log(res);