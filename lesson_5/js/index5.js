'use strict'

function checkAge (arr) {
    let arrName = [];

    for (let i = 0; i < arr.length; i++) {
        
        if(arr[i].age >= 18 ) {
            arrName.push(arr[i].name);
        }
    }
    return arrName;
}

console.log(checkAge ([ {id: 1, name: "Ivan", age: 42},  {id: 2, name: "Petya", age: 13}, {id: 3, name: "Vasya", age: 24}]));