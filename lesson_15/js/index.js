'use strict'

//1
function randomNumberHandler() {
    let randomNumber = Math.ceil(Math.random() * 10);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomNumber <= 5) {
                resolve();
            } else {
                reject();
            }
        }, randomNumber * 1000)
    });

}

//3

function squarePow(num) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(parseInt(num *= num));
        }, 3000);
    }).then(() => {
        setTimeout(() => {
            num *= num
        }, 3000)
    })
}

//2
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}
