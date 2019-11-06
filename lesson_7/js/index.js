'use strict'
//задача 1
    
let text = 'Sale HOT FiNal This is a rare hard to fine in this condition 1994 Eddie Bauer Ford bronco 4x4 that is in need of nothing but a new home!';
let spamWords = ['sale', 'hot', 'final'];

function isSpam(text, spamWords) {
    let ArrText = text.toLowerCase().split(' ');
    let matches = [];
    for (let i=0; i<spamWords.length; i++) {
        matches[i] = ArrText.some(currentValue => currentValue == spamWords[i]);
        }
    //console.log(matches);
     
    let boool = matches.some(function(item){
        return item == true
    });
    console.log(boool);
};
isSpam(text, spamWords);

// задача 2

let names = [ 'Петя', 'Артем', 'МаШа', 'Катя', 'ИваН' ];

function getCapitalizedNamesString(names) {
    let namesString = names.join(', ').toLowerCase();
    let namesArr = namesString.split(', ');
    for (let i = 0; i < namesArr.length; i++){
        namesArr[i] = namesArr[i][0].toUpperCase() + namesArr[i].slice(1);
    };
   
    let result = namesArr.join(', ');
    console.log(result);
}
getCapitalizedNamesString(names);

// задача 3

let students = ['student1', 'student2', 'student3', 'student4', 'student5', 'student6', 'student7', 'student8', 'student9', 'student10', 'student11', 'student12'];

function chooseDuty(students) {
        let goo = students[Math.floor((Math.random()*students.length))];
        console.log(`${goo} сегодня дежурит в классе`);
};
chooseDuty(students);
chooseDuty(students);
chooseDuty(students);

//задача 4

let str = 'This is a rare hard to fine in this condition 1994 Eddie Bauer Ford bronco 4x4 that is in need of nothing but a new home!';
let n = 999;

function cutText(str, n) {
    let result;
    if (str.length > n) {result = str.substring(0, n) + '...';
}
    else {result = str};
    return result   
}
console.log(cutText(str, n));

//Задача 5

let date = '2025-12-31';
function convertDate(date) {
    let dateArr = date.split('-');
    let reversedDateArr = dateArr.reverse();
    let dateMod = reversedDateArr.join('.')
    console.log(dateMod);
};
convertDate(date);

// Задача 6

let array = [1,2,3,4,5,,,,,,10,12,,15];
console.log(array);

function trueLength(array) {
    let newArray = array.filter(item => item != null);
    console.log('Настоящая длина массива равна: '+ newArray.length)
}
trueLength(array);

//Задача 7

const items = [
    { name: 'Морковь', amount: 3, price: 15 },
    { name: 'Лук', amount: 1, price: 10 },
    { name: 'Капуста', amount: 2, price: 10 },
    { name: 'Банан', amount: 1, price: 30 },
    { name: 'Яблоко', amount: 1, price: 17 },
    { name: 'Апельсин', amount: 3, price: 36 },
];

function calculateCart(items) {
    let sumArr = items.map(function(item) {
    return item.amount * item.price
    });
    let totalSum = sumArr.reduce(function(total, currentValue, index, sumArr){
    return total + currentValue;
    }, 0);
return totalSum;
//console.log('Сумма ваших покупок равна ' + totalSum + ' грн.');
};
console.log(calculateCart(items));

//Задача 8

const items1 = [
    {id: 1, name: 'Морковь', amount: 3, price: 15 },
    {id: 2, name: 'Лук', amount: 1, price: 10 },
    {id: 3, name: 'Капуста', amount: 2, price: 10 },
    {id: 4, name: 'Банан', amount: 1, price: 30 },
    {id: 5, name: 'Яблоко', amount: 1, price: 17 },
    {id: 6, name: 'Апельсин', amount: 3, price: 36 },
];

function findPriceById(idItem, items1) {

    let filteredById = items1.filter(item => item.id == idItem);
    let priceFindById = filteredById[0].price;
    console.log(priceFindById)
};

findPriceById(6, items1);

//Задача 9

const items2 = [
    {id: 1, name: 'Морковь', amount: 3, price: 15, category: 'vegetables' },
    {id: 2, name: 'Лук', amount: 1, price: 10, category: 'vegetables' },
    {id: 3, name: 'Капуста', amount: 2, price: 10, category: 'vegetables' },
    {id: 4, name: 'Банан', amount: 1, price: 30, category: 'fruits' },
    {id: 5, name: 'Яблоко', amount: 1, price: 17, category: 'fruits' },
    {id: 6, name: 'Апельсин', amount: 3, price: 36, category: 'fruits' },
];

let a = 'fruits';
let b = 'vegetables';
// переменные a и b будем передавать в функцию как параметр для фильтрации

function filterByCategory (category, items2) {
    let aa = items2.filter(item => item.category == category);
    console.log(aa);
}

filterByCategory (a, items2);

//Задача 10

function compareArrays(arr1, arr2) {
    
    let check;

    if(arr1.length != arr2.length) {
        check = 'false';
    } else {
        arr1.sort();
        arr2.sort();
        for(let i = 0; i < arr1.length; i++) {
            if(arr1[i] == arr2[i]) {
                check = 'true';
            } else {
                check = 'false';
                break;
            }
        }
    }
    console.log(`Массивы равны: ${check}`);
    }

let array1 = [1, 2, 3, 'string', 10, 15];
let array2 = [15, 10, 'string', 3, 2, 1 ];

compareArrays(array1, array2);

//Задача 11

function sum(arr) {

    let sum = 0;
    let sumArr = [].concat(...arr);
    sumArr.forEach( function(item, index) {
        sum = sum + item;
    });
    console.log(sum);
};

let arr = [[1, 2, 3], [1, 2, 3], [6]];
sum(arr);
//


