'use strict'

// задача 1

function isSpam(text, spamWord) {
    let lowerStr = text.toLowerCase();

    return lowerStr.includes('qwe') || lowerStr.includes('asq');
}

let spamWord = ['qwe', 'aSq'],
    text = 'qWe';

let check = isSpam(text, spamWord);
console.log(check);


// задача 2

function getCapitalizedNamesString(str) {
    str = str.map(function (words) {
        return words = words.charAt(0).toLocaleUpperCase() + words.slice(1).toLowerCase();
    })
    return str.join(`, `);
};

let str = ['МаШа', 'кАтя', 'сВетА'];
let checkWords = getCapitalizedNamesString(str);

console.log(checkWords);


// задача 3

function getNames(names) {
    // fined random index
    let index = Math.floor(Math.random() * names.length);
    // fined item
    return names[index];
}

let name = ['Юлия', 'Дмитрий', 'Владимир', 'Ольга'];
let rundomName = getNames(name);
console.log(rundomName + " сегодня дежурный в классе ");


// задача 4

function cutText(str, n) {
    let result = (str.length > n) ? str.substr(0, n) + '...' : str;
    return result;
}

let str = 'Pisagfjd';
let n = 3;
let res = cutText(str, n);
console.log(res);


// задача 5

let newDate;

function convertDate(date) {
    return newDate = date.replace(/-/g, '.');
}

let date = '25-12-1992';
let repDate = convertDate(date)
console.log(newDate);


// задача 6

function trueLehgth(array) {
    for (let i = 0; i < array.length; i++) {
        array1 = array.filter(function () {
            return true;
        });
    }
    return array1;
}

let array = [5, 2, , 3, 4, , , 'num'];
let array1 = [];
let newArray = trueLehgth(array);
console.log(array1.length);


// задача 7

let user;
let sum = 0;
let i;

function findPriceById(items) {
    for (i = 0; i < items.length; i++) {
        sum += items[i].price;
    }
    return sum;
};

let items = [{
        name: "Морковь",
        amount: 3,
        price: 2.50
    },
    {
        name: "Морковь",
        amount: 35,
        price: 2.50
    },
    {
        name: "Морковь",
        amount: 35,
        price: 10
    }
            ];
let result = findPriceById(items);
console.log(result);


// задача 8

function findPriceById(id, items) {
    let findedItem = items.find(function (item) {
        return item.id === id;
    });
    return findedItem.price * findedItem.amount
}

let items8 = [
    {
        id: 1,
        name: "Морковь",
        amount: 3,
        price: 2.50
    },
    {
        id: 2,
        name: "Морковь",
        amount: 5,
        price: 10.50
    },
    {
        id: 3,
        name: "Морковь",
        amount: 15,
        price: 2
    },
];

console.log(findPriceById(3, items8))


// задача 9

function findPriceById(category, items) {
    let findedItem = items.filter(function (item) {
        return item.category === category;
    });
    return findedItem;
}

let arr = [
    {
        id: 1,
        name: "Морковь",
        amount: 3,
        price: 2.50
    },
    {
        id: 2,
        name: "Груша",
        amount: 5,
        price: 10.50,
        category: 'vegetables'
    },
    {
        id: 3,
        name: "Яблоко",
        amount: 15,
        price: 2,
        category: 'vegetables'
    },
];

let veg = findPriceById('vegetables', arr);

console.log(veg);

// задача 10

function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every(function (elem, index) {
        return elem === arr2[index];
    })
}

let arr1 = [1, 2, 3],
    arr2 = [1, 3, 2];
let compare = compareArrays(arr1, arr2);
console.log(compare);


// задача 11

function sum(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++)
            total += arr[i][j];
    }
    return total;
}

let arr = [[1, 2, 3], [4, 5], [6]];
let total = 0;
let i, j;
let result = sum(arr);
console.log(result);