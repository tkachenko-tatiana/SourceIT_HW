'use strict'
//1
console.log(`Задание 1`);
let spamWords = [`Привет`, `Yes`, ` no`, `OK`];
let text = `Yes, We won`;
let findSpam = (text, spamWords) => {
    return spamWords.filter((word) => text.toLowerCase().includes(word.toLowerCase())).length > 0;
};
console.log(findSpam(text, spamWords));

//2
console.log(`Задание 2`);
let names = [`пЕтя`, `Артём`, `катя`, `МаШа`];
let getCapitalize = (names) => {
    names = names.map(function (i) {
        return  i = i.charAt(0).toLocaleUpperCase() +i.slice(1).toLowerCase();
    });
    return names.join(`, `)
};
console.log(getCapitalize(names));

//3
console.log(`Задание 3`);
let chooseDuty = (name) => {
    let random = (min, max) =>
        Math.floor(Math.random() * (max - min + 1)) + min;
    let user = names[random(0, names.length-1)].toLowerCase();
    return user + ` сегодня дежурный в классе`;
};
console.log(chooseDuty(name));

//4
console.log(`Задание 4`);
function cutText(str, n) {
    if (str.length > n) {
        str = str.slice(0, n) + `...`;
    }
    return str
}

let string = `Впрочем, если быть точнее, из-за того, что большие числа обрезаются до 32 битов оператором`;
console.log(cutText(string, 20));

//5
console.log(`Задание 5`);

//6
console.log(`Задание 6`);
let arr6 = [1, 2, 3, , false, null , , , , , , , ,10];
let arrFilter = arr6.filter(function (item) {
    return !! item;

});
console.log(arrFilter);

//7
console.log(`Задание 7`);
let items = [
    {name: "Морковь", amount: 3, price: 2.50},
    {name: "Сыр", amount: 5, price: 10.50},
    {name: "Вода", amount: 15, price: 2},
];
let total = items.reduce(function (result, item) {
    return result + (item.amount * item.price);
}, 0);
console.log(`Total ` +total);

//8
console.log(`Задание 8`);
let items8 = [
    {id: 2, name: "Морковь", amount: 3, price: 2.50},
    {id: 654, name: "Сыр", amount: 5, price: 10.50},
    {id: 34, name: "Вода", amount: 15, price: 2},
];
function findPriceById(id, items) {
    let foundedItem = items.find(function (item) {
        return item.id === id;
    });
    return foundedItem.price * foundedItem.amount
}

console.log(`Total price for this item is ` + findPriceById(654, items8))

//9
console.log(`Задание 9`);
let items9 = [
    {category: `vegetables`,  id: 2, name: "Морковь", amount: 3, price: 2.50},
    {category: `vegetables`, id: 34, name: "Вода", amount: 15, price: 2},
    {category:`domestic`, id: 654, name: "Сыр", amount: 5, price: 10.50},
    {category:`domestic`,id: 34, name: "Лимоны", amount: 3, price: 6},
];
function findPriceByCategory(category, items) {
    let foundedItems = items.filter(function (item) {
        return item.category === category;
    });
    return foundedItems
}
console.log(findPriceByCategory(`vegetables`, items9));

//10
console.log(`Задание 10`);
let numArr = [1, 4, 3, 5, 7, 9];
let numArr2 = [1, 3, 4, 9, 7, 5];

function compare(arr1, arr2) {
    let a = 0;
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            a = arr1[i] === arr2[j] ? ++a : a;
        }
    }
    return a === arr1.length
}
console.log(compare(numArr, numArr2));

//11
console.log(`Задание 11`);
let arr11 = [[1, 2, 3], [4, 5], [6]];
function sumArr(arr) {
    return arr.reduce((sum, curr) => sum + curr.reduce((subSum, subCurr) => subSum + subCurr, 0), 0);
}
console.log(sumArr(arr11));