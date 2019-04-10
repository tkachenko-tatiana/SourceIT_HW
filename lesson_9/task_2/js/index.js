'use strict'
// Реализовать калькулятор у которого есть методы input, sum, mul, sub (ввод данных, сумма, умножение и вычитание).
//  input должен вызывать ввод 2 цифр от пользователя через prompt и сохранять в себе.
//  Остальные методы должны производить над цифрами соответствующие операции

// calculator.input()
// calculator.sum()
let x, y;
let calculator = {
    input : function(){
        x = +prompt('Первое число', x);
        y = +prompt('Второе число', y);
    },
    sum : function(){
        return x + y;
    },
    mul : function(){
        return x * y;
    },
    sub : function(){
        return x - y;
    } 
}
calculator.input();
console.log(calculator.sum());
console.log(calculator.mul());
console.log(calculator.sub());