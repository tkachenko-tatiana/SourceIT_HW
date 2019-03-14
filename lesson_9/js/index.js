'use strict'

//1) Реализовать функцию шпиона которая будет сохранять количество вызовов функции

function makeSpyOn() {

  let countCalls = 0;

  function spy() {
    countCalls++
    spy.calls = countCalls;
  }

  return spy;

}

const spy = makeSpyOn();
spy();
spy();
spy();


console.log(spy.calls);
alert(spy.calls);




//2) Реализовать калькулятор у которого есть методы input, sum, mul, sub (ввод данных, сумма, умножение и вычитание). 
// input должен вызывать ввод 2 цифр от пользователя через prompt и сохранять в себе. 
// Остальные методы должны производить над цифрами соответствующие операции

const calculalator = {
  a: 0,
  b: 0,

  input: function input (){
    this.a = +prompt('a = ');
    this.b = +prompt('b = ');
  },
  
  sum: function sum(){
    return this.a + this.b;
  },
  
  mul: function mul (){
    return this.a * this.b;
  },

  sub: function sub (){
    return this.a / this.b;
  },

}
  
calculalator.input();

console.log( calculalator.sum() );
alert( calculalator.sum() );
console.log( calculalator.mul() );
alert( calculalator.mul() );
console.log( calculalator.sub() );
alert( calculalator.sub() );



//3) Реализовать другой калькулятор который не запрашивает данные, а работает с цепочкой вызовов

const calculalator = {
  result: 0,

  input: function (a){
    this.result = a;
    return this;
  },

  sum: function (b){
    this.result = this.result + b;
    return this;
  },

  mul: function (b){
    this.result = this.result * b;
    return this;
  },

  sub: function sub (b){
    this.result = this.result / b;
    return this;
  },
  
};

console.log(calculalator.input(1).sum(2).mul(3).sub(0.5));



//4) Сделайте функцию, каждый вызов которой будет генерировать случайное число от 1 до 10 и возвращать его. 
// Как только случайное число повторится - вернуть весь массив ранее сгенерированных чисел. 
// Решите задачу через замыкания(в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией).

function generator(){
  let arr = [];
  function randomNumber(min, max) {
    min = 0;
    max = 10;
    var rand = Math.floor(Math.random() * (max + 1 - min));
    if (arr.includes(rand)){
      return arr;
    } else {
      arr.push(rand);
      return rand;
    }
  }
  return randomNumber;
}

const res = generator();

console.log(res());
console.log(res());
console.log(res());
console.log(res());
console.log(res());
console.log(res());
console.log(res());
console.log(res());
console.log(res());
console.log(res());
console.log(res());



//5) Напиши функцию создания генератора sequence(start, step). 
// Она при вызове возвращает другую функцию-генератор, которая при каждом вызове дает число на step больше, и так до бесконечности. 
// Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора. Шаг можно не указывать, тогда он будет равен одному. 
// Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.

function sequence(start, step) {
  start = start || 0;
  step = step || 1;
  start = start - step;
  return function() {
    return start = start + step;
  }
}
  
const generator = sequence(10, 3);
const generator2 = sequence(7, 1);
 
console.log(generator());
console.log(generator());

console.log(generator2());
 
console.log(generator());
 
console.log(generator2());