'use strict'
//1
console.log('ЗАДАНИЕ 1');
let arr1 = [1, 2, 3];
// arr1[0] = arr1[0] + 3;
// arr1[1] = arr1[1] + 3;
// arr1[2] = arr1[2] + 3;
// console.log(arr1);
for( let i = 0; i<arr1.length; i++) {
    arr1[i]= arr1[i]*2;
}
console.log(arr1);


//2
console.log('ЗАДАНИЕ 2');
let arr2 = [1, 2, 3];
arr2[arr2.length] = 4;
arr2[arr2.length] = 5;
console.log(arr2);

//3
console.log('ЗАДАНИЕ 3');
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8];

function getSum(array) {
    let sum = 0;
    for (let i = 0; i < arr3.length; ++i) {
        sum += array[i]
    }
    return sum
}

console.log(getSum(arr3) / arr3.length);

//4
console.log('ЗАДАНИЕ 4');

let user = {
    name: 'Ivan',
    surname: 'Petrov',
    age: '40',
    country: 'Ukraine',
    hobby: 'swimminig',
};
console.log(user.name + ' ' + user.surname + ' ' + user.age);

//5
console.log('ЗАДАНИЕ 5');

//6
console.log('ЗАДАНИЕ 6');

function findNum() {
    let sum = 2;
    let it = 0;
    while (sum <= 1000) {
        sum = sum * 2;
        it = ++it;
    }
    console.log(sum);
    console.log(it)
}

findNum();

//7
console.log('ЗАДАНИЕ 7');

function countSum2(...theArgs) {
    let arr7 = [...theArgs];
    let sum = 0;
    for (let i = 0; i < arr7.length; ++i) {
        sum += arr7[i]
    }
    return sum
}

console.log(countSum2(1, 2, 3, 4));








