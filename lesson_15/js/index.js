'use strict'

//1
function randomNumberHandler() {
    let randomNumber;

    function getRandom() {
        return randomNumber = Math.floor(Math.random() * Math.floor(11))
    }
    getRandom();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            randomNumber < 6 ? resolve(console.log(`Success! timeout is ${parseInt(randomNumber, 10)}s`)) :
                reject(new Error(`Error! Out of time: ${parseInt(randomNumber, 10)}s.`))
        }, randomNumber * 1000)
    })
}

randomNumberHandler();

//2
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

delay(2000).then(() => alert("Hello!"));

//3
function squarePow(num) {
    let firstResult;
    let secondResult;
    let first = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                firstResult = num * num;
                console.log('First Result is ' + firstResult);
                resolve(firstResult)
            }, 3000)
        })
    };
    first().then(secondResult = ()=>{
        setTimeout(()=>{
            secondResult=firstResult*firstResult
            console.log('Second result is '+secondResult)
        },3000)
    });
    return secondResult
}
squarePow(2)