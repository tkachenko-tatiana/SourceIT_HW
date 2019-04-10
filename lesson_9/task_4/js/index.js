'use strict'
// Сделайте функцию, каждый вызов которой будет генерировать случайное число от 1 до 10 и возвращать его. 
// Как только случайное число повторится - вернуть весь массив ранее сгенерированных чисел.
//  Решите задачу через замыкания(в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией).
function isIncludeGenerationNumbder(){    
    let arr = [];    
    function generator(min = 1, max = 10){
        let num = Math.floor(Math.random() * (max - min)) + min;
        console.log(num);    
        if (arr.includes(num)){
            return arr;
        } else {
            arr.push(num);
        }
    }
    return generator;   
};
let result = isIncludeGenerationNumbder();
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());