'use strict'

// Task 1 =========================================
const makeSpyOn = () => {
  let remember = 0;

  const makePush = () => remember++;

  makePush.calls = () => remember;

  return makePush;
}

const spy = makeSpyOn();
spy();
spy();
spy();

console.log('=== Task 1 ===');
console.log(spy.calls()); // 3


// Task 2 =========================================
const calcFunc = () => {

  let numberOne,
    nomberTwo;

  const input = () => {
    alert('Сейчас будут вопросики для второго задания :)')
    numberOne = +prompt('Введите первое число:', '');
    nomberTwo = +prompt('Введите второе число:', '');
  } // ввод данных | возвращает undefined, так как нужна для переопределения переменных

  const sum = () => {
    return numberOne + nomberTwo;
  } // сумма

  const mul = () => {
    return numberOne * nomberTwo;
  } // умножение

  const sub = () => {
    return numberOne - nomberTwo;
  } // вычитание

  return {
    input: input,
    sum: sum,
    mul: mul,
    sub: sub
  }
}

const calculator = calcFunc();

console.log('=== Task 2 ===');
console.log(calculator.input());
console.log(calculator.sum());
console.log(calculator.mul());
console.log(calculator.sub());


// Task 3 =========================================
const calcImprovedFunc = () => {
  let number = 0;

  const input = (a) => {
    number = a;
    const sum = (b) => {
      let numberSum = number + b;
      const mul = (c) => {
        let numberMul = numberSum * c;
        const sub = (d) => {
          let numberSub = numberMul - d;
          return numberSub;
        }
        return {
          sub: sub
        }
      }
      return {
        mul: mul
      }
    }
    return {
      sum: sum
    }
  }
  return {
    input: input
  }
}

const calculatorImproved = calcImprovedFunc();

console.log('=== Task 3 ===');
console.log(calculatorImproved.input(1).sum(2).mul(3).sub(4)); // 5


// Task 4 =========================================
const singleGenerator = () => {

  let memorized = [];

  const randomGenerate = () => {
    let min = 1,
        max = 11;

    min = Math.ceil(min);
    max = Math.floor(max);
    let num = Math.floor(Math.random() * (max - min)) + min;

    if (memorized.includes(num)) {
      return memorized;
    } else {
      memorized.push(num);
      return num;
    }
  }

  return randomGenerate;
}

const generateRun = singleGenerator();

console.log('=== Task 4 ===');
console.log(generateRun());
console.log(generateRun());
console.log(generateRun());
console.log(generateRun());
console.log(generateRun());


// Task 5 =========================================
const sequence = (start, step) => {
  let num = 0,
      stepFunc = step == undefined ? 1 : step; // если отсутствует значение "шага"

  const stepGenerator = () => {
    if (num >= stepFunc) {
      num += stepFunc;
      return start + (num - stepFunc);
    } else {
      num += stepFunc;
      return start;
    }
  }

  return stepGenerator;
}

console.log('=== Task 5 ===');
const generator = sequence(10, 3);
const generator2 = sequence(7, 1);
const generator3 = sequence(9);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7

console.log(generator()); // 16

console.log(generator2()); // 8

console.log(generator3()); // 9
console.log(generator3()); // 10