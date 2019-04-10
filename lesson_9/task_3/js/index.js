'use strict'
// Реализовать другой калькулятор который не запрашивает данные, а работает с цепочкой вызовов
// calculator.input(1).sum(2).mul(3).sub(4)
let calculator = {
    result : 0,
    input : function(x){
        this.result = x;
        return this;
    },
    sum : function(x){
        this.result += x;
        return this;
    },
    mul : function(x){
        this.result *= x;
        return this;
    },
    sub : function(x){
        this.result -= x;
        return this;        
    }
}
console.log(calculator.input(5).sum(6).mul(2).sub(11));