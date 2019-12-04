'use strict'


//1

let arr = [1, 2, 3, 4];
let arr1 = [];
for (var i = 0; i < arr.length; i++) {
    arr1[i] = arr[i].length;
    arr1[i] = i + 4;
}

console.log(arr1);

//2

let arr3 = [1, 2, 3];
arr3.push(4, 5);
console.log(arr3);

//3

let array = [1, 2, 3, 4, 5, 6];
let array1 = 0;
for (let i = 0; i < array.length; i++) {
    array1 += array[i];
};
let news = array1 / array.length;
console.log(news);

//4

let user = {
    name: "Yuliia",
    surname: "Kobets",
    age: 26
}

console.log(user.name + " " + user.surname + " " + user.age);

//5

let keys = ["key1", "key2", "key3", "key4", "key5"];
let values = ["value1", "value2", "value3", "value4", "value5"];
let obj = {};

for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
}

console.log(obj);

//6

let num = 5;
let res = 0;
while (num < 1000) {
    res = res + 1;
    num = num * 2;
}

console.log("Количество итераций: " + res, "Pезультат: " + num);

//7

function sum() {
    let result = 0;

    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

let b = sum(1, 2, 5);

console.log(b);