'use strict'

//1
function makeSpyOn() {
    let count = 0;

    return function makeSpyOn() {
        makeSpyOn.calls = () => {
            return count - 1
        };

        return count++
    }
}

const spy = makeSpyOn();

//2
function makeBuffer() {
    let someStorage;

    return function storeData(value) {
        storeData.reset = () => {
            someStorage = undefined;
            console.log(12)
        };

        return value ? someStorage = value : someStorage
    }
}

let buffer = makeBuffer();

//3
function makeCalculator() {
    let num1 = 0;
    let num2 = 0;

    function inputC() {
        num1 = +prompt("Please enter the first number", "0");
        num2 = +prompt("Please enter the second number", "0");
    }

    function plusC() {
        return num1 += num2;
    }

    function multiplyC() {
        return num1 * num2;
    }

    function minusC() {
        return num1 - num2;
    }

    function resetC() {
        num1 = 0;
        num2 = 0
    }

    return {
        input: inputC,
        sum: plusC,
        mul: multiplyC,
        sub: minusC,
        res: resetC,
    };
}
let calculator = makeCalculator();