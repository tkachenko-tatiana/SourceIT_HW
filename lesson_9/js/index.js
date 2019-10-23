'use strict'

// #1

function makeSpyOn() {
    let num = 0;
    return function myFunc() {
        myFunc.calls = ++num;
    }
}

const spy = makeSpyOn();

// #2-3

function makeBuffer() {
    let store;
    return function myFunc(...value) {
        if (value.length === 0) {
            return store;
        } else {
            store = value[0];
        }
        myFunc.reset = function () {
            store = undefined;
        };
    }
}

let buffer = makeBuffer();

// #4

function makeCalc() {
    let a;
    let b;

    function input() {
        a = +prompt("Please enter the first number", "");
        b = +prompt("Please enter the second number", "");
    }

    function sum() {
        return a + b;
    }

    function mul() {
        return a * b;
    }

    function sub() {
        return a - b;
    }

    return {
        input: input,
        sum: sum,
        mul: mul,
        sub: sub,
    };
}

const calculator = makeCalc();