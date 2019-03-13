let calculator = {
    input: function(){
        a = +prompt('Введите число а: ', );
        b = +prompt('Введите число b: ', );
    },
    sum: function(){
        return a + b;
    },
    mult: function(){
        return a * b;
    },
    sub: function(){
        return a - b;
    }

}

calculator.input();
alert(calculator.sum());
alert(calculator.mult());
alert(calculator.sub());