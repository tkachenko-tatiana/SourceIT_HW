function makeCalculator() {
    let one;
    let two;

     function input() {
        one = prompt("Пожалуйста введите первый номер", "");
        two = prompt("Пожалуйста введите второй номер", "");
    }

     function sum() {
        return one + two;
    }

     function mul() {
        return one * two;
    }

     function sub() {
        return one - two;
    }

     return {
        input: input,
        sum: sum,
        mul: mul,
        sub: sub,
    };
}

 const calculator = makeCalculator();