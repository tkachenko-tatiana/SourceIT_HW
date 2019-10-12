'use strict'

// #1
function isSpam(text, spamWords) {
    let flag = false;
    for (let i of spamWords) {
        if (text.toLowerCase().includes(i.toLowerCase()) === true) {
            flag = true;
            break;
        }
    }
    return flag;
}

// #2

function getCapitalizedNamesString(names) {
    let newArray = [];
    for (let i = 0; i < names.length; i++) {
        newArray[i] = names[i][0].toUpperCase() + names[i].slice(1).toLowerCase();
    }
    return newArray.join(', ');
}

// #3

function chooseDuty(names) {
    let randomStudent = names[Math.floor(Math.random() * names.length)];
    return `${randomStudent} is on duty in the class today`;
}

// #4

function cutText(str, n) {
    let result = str.length > n ? `${str.slice(0, n)}...` : str;
    return result;
}

// #5

function convertDate(date) {
    return date.split('-').reverse().join('.');
}

// #6

function trueLength(array) {
    let newArray = array.filter(value => value !== undefined);
    return newArray.length;
}

// #7

function calculateCart(items) {
    let result = items.reduce((sum, current) => {
        return sum + current.amount * current.price;
    }, 0);
    return result;
}

// #8

function findPriceById(id, items) {
    return items.find(item => item.id === id);
}

// #9    

function filterByCategory(category, items) {
    let filteredItems = items.filter(item => item.category === category)
    return filteredItems;
}

// #10

function compareArrays(arr1, arr2) {
    let flag = true;
    if (arr1.length !== arr2.length) {
        flag = false;
        return flag;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1.sort()[i] !== arr2.sort()[i]) {
            flag = false;
            break;
        }
    }
    return flag;
}

// #11

function sum(arr) {
    let concatArray = arr.reduce((a, b) => {
        return a.concat(b);
});
    let sum = concatArray.reduce((sum, value) => {
        return sum + value;
    })
    return sum;
}
