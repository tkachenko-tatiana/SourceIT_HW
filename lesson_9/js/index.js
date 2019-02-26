/*1) Реализовать функцию шпиона которая будет сохранять 
количество вызовов функции*/

function makeSpyOn(){
    let cnt = 0;
    function inc(){
        cnt++;
        inc.calls = cnt;
    }
    return inc;
}

const spy = makeSpyOn();
spy();
spy();

console.log(spy.calls); // 2

/*2) Реализовать калькулятор у которого есть методы input, sum, mul, sub 
(ввод данных, сумма, умножение и вычитание). 
input должен вызывать ввод 2 цифр от пользователя через prompt и сохранять в себе. 
Остальные методы должны производить над цифрами соответствующие операции

calculator.input()
calculator.sum()*/

function calculator() {
    let a=0;
    let b=0;
    return {
        input: function() {
            a = Number(prompt("Input a"));
            b= Number(prompt("Input a"));
            if(a==NaN || b==NaN){
                return false;
            }
        },
        sum: function(){
            return a+b;
        },
        mul: function(){
            return a*b;
        },
        sub: function(){
            return a-b;
        }
    }
}


var calc = calculator();
calc.input();
console.log(calc.sum());
console.log(calc.mul());
console.log(calc.sub());


/*3) Реализовать другой калькулятор который не запрашивает данные, 
а работает с цепочкой вызовов

calculator.input(1).sum(2).mul(3).sub(4)*/

//не смог реализовать calculator.input(1).sum(2).mul(3).sub(4) сорри)
function Calculator() {
    let a=0;
    let b=0;
    function input() {
        a = Number(prompt("Input a"));
        b = Number(prompt("Input a"));
    }        
    function sum(){
        return a+b;
    }
    function mul(){
        return a*b;
    }
    function sub(){
        return a-b;
    }
  
    return { 
        input: input,
        sum: sum,
        mul: mul,
        sub: sub,
    };
  }
  
  let calculator = Calculator();
  console.log('calculator: ', calculator)
  calculator.input();//.sum().mul().sub();
  console.log(calculator.sum());

/*4) Сделайте функцию, каждый вызов которой будет генерировать случайное 
число от 1 до 10 и возвращать его. Как только случайное число 
повторится - вернуть весь массив ранее сгенерированных чисел. 
Решите задачу через замыкания(в замыкании должен хранится массив чисел, 
которые уже были сгенерированы функцией).*/


function genRND(){
    let all_arr = [];
    function generate(){
        let temp = Math.floor(Math.random() * (10));
        all_arr.push(temp);
        if(all_arr.length > 1){
            if(all_arr[all_arr.length-1-1] == temp)
            {
                return all_arr;
            }
        }
        return temp;
    }
    return generate;
}

const new_num = genRND();
console.log(new_num());
console.log(new_num()); 
console.log(new_num()); 
console.log(new_num()); 
console.log(new_num());


/*5) Напиши функцию создания генератора sequence(start, step). 
Она при вызове возвращает другую функцию-генератор, 
которая при каждом вызове дает число на step больше, и так до бесконечности. 
Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора. 
Шаг можно не указывать, тогда он будет равен одному. 
Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.*/

function sequence(start = 0, step = 1){
    let cnt_call = 0;
    let temp_str = start;
    let temp_stp = step;
    function generator(){
        if(cnt_call == 0)
        {
            cnt_call++;
            return start;
        }
        else{
            return temp_str+=temp_stp;
        }
    }
    return generator;
}

const generator = sequence(10, 3);
const generator2 = sequence(7, 1);
 
console.log(generator()); // 10
console.log(generator()); // 13
 
console.log(generator2()); // 7
 
console.log(generator()); // 16
 
console.log(generator2()); // 8