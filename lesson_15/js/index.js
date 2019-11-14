'use strict'

// #1

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

// #2

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

// #3

function squarePow(num) {
    new Promise(resolve => {
        setTimeout(() => {
            resolve(console.log(num **= 2));
        }, 3000);
    }).then(() => {
        setTimeout(() => {
            console.log(num ** 2)
        }, 3000)
    })
}