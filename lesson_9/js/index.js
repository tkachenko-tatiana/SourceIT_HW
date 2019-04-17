'use strict'

//LESSON 9

// 1. Реализовать функцию шпиона которая будет сохранять
// количество вызовов функции

function makeSpyOn() {
  let calls = 0;
    return function() {
      calls++;
      spy.calls = calls;
  }
}
const spy = makeSpyOn();
spy();
spy();
spy();
spy();
spy();
spy();
console.log(spy.calls);

// 2. Реализовать калькулятор у которого есть методы
// input, sum, mul, sub (ввод данных, сумма, умножение и вычитание).
// input должен вызывать ввод 2 цифр от пользователя через prompt
// и сохранять в себе. Остальные методы должны производить над цифрами
// соответствующие операции

function Calc() {
let num1 ;
let num2 ;
	function input() {
	 num1  = prompt('Введите первое число ');
	 num2 = prompt('Введите второе число ');
	}
	function sum() {
	return num1 + num2;
	}
	function mul() {
	return num1 * num2;
	}
	function sub() {
	return num1 - num2;
	}
	 return {
    input: input,
    sum: sum,
    mul: mul,
    sub: sub
  }
}
 const calculator = Calc();

console.log(calculator.input());
console.log(calculator.sum());
console.log(calculator.mul());
console.log(calculator.sub());

// 3. Реализовать другой калькулятор который не запрашивает данные,
// а работает с цепочкой вызовов

let calculator = {
total: 0,

  input: function input(a) {
      this.total = a;
      return this;
  },
  sum: function sum(b) {
      this.total = this.total + b;
      return this;
  },
  mul: function mul(b) {
      this.total = this.total * b;
      return this;
  },
    sub: function sub(b) {
        this.total = this.total - b;
        return this;
    }
}
calculator.input(25).sum(78).mul(15).sub(31);
console.log("result = " + calculator.total);

// 4. Сделайте функцию, каждый вызов которой будет генерировать случайное
// число от 1 до 10 и возвращать его. Как только случайное число повторится -
// вернуть весь массив ранее сгенерированных чисел.
// Решите задачу через замыкания(в замыкании должен хранится массив чисел,
// которые уже были сгенерированы функцией).

function NumberGenerator() {
  let arr = [];
     function generator(min = 1, max = 10) {
        let num = Math.floor(Math.random() * (max - min)) + min;
           console.log(num);
        if (arr.includes(num)) {
            return arr;
        } else {
            arr.push(num);
        }
    }
    return generator;
};
let result = NumberGenerator();
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());

// 5. Напиши функцию создания генератора sequence(start, step).
// Она при вызове возвращает другую функцию-генератор, которая при каждом вызове
// дает число на step больше, и так до бесконечности. Начальное число, с
// которого начинать отсчет, и шаг, задается при создании генератора.
// Шаг можно не указывать, тогда он будет равен одному. Начальное значение
// по умолчанию равно 0. Генераторов можно создать сколько угодно.

function sequence(start = 0, step = 1){
    let sum = start;
        return () => {
        return sum += step;
    }
}
  let generator1 = sequence(10, 3);
  let generator2 = sequence(7, 1);

console.log(generator1());
console.log(generator1());
console.log(generator2());
console.log(generator1());
console.log(generator2());
