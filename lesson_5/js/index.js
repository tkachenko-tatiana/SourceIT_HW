'use strict';
// #1

let firstArr = [3, 5, 7];

for (let i = 0; i < firstArr.length; i++) {
    firstArr[i] += 3;
}
console.log(firstArr);

//#2

let arr = [1, 2, 3];
arr.push(4, 5);

//#3

let array = [5, 2, 1, 6];
let sum = 0;
let average;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
average = sum / array.length;

//#4

let user = {
    name: "Bart",
    surname: "Simpson",
    age: 10
}

console.log(`${user.name} ${user.surname} ${user.age}`);

//#5

let keys = ['key1', 'key2', 'key3', 'key4', 'key5'];
let values = ['value1', 'value2', 'value3', 'value4', 'value5'];

let obj = {};
for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
}

//#6

let num = 10,
    o = 0;
while (num < 1000) {
    num *= 2;
    o++;
}
console.log(`${num} \n ${o}`)


//#7

function findSum(...numbers) {
    let mySum = 0;
    for (let i = 0; i < numbers.length; i++) {
        mySum += numbers[i];
    }
    return mySum;
}