function getEvenElements(arr) {  // объявляем функцию getEvenElements
    let evenNum = arr.filter(function(num) {  //объявляем переменную , в которую запишем результат полученный через метод filter
        return num % 2 == 0;  // возвращет числа которую деляться на 2 нацело (без остатка)
      });
      return evenNum; 
}

const res = getEvenElements([1,2,3,4,5,6,6,8,16,32,11,12]);
console.log(res);