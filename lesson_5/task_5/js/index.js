'use strict'
// Функция принимает массив объектов вида { id: 1, name: "Иван", age: 42 }
// Функция должна вернуть массив имён пользователей которым исполнилось 18 лет.

let users = [{
    id: 1,
    userName: 'Иван',
    age: 35
},
{
    id: 2,
    userName: 'Павел',
    age: 18
},
{
    id: 3,
    userName: 'Юлия',
    age: 17
},
{
    id: 4,
    userName: 'Оксана',
    age: 26
}];
function checkAge(users){
    let newArray = [];
    for (let i = 0; i < users.length; i++){
        if (users[i].age >= 18){
            newArray.push(users[i].userName);
        }
    }
    return newArray
}
alert(checkAge(users));