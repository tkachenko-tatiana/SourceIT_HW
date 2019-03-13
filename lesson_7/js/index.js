'use strict'

//LESSON 7

// 1. Функция принимает массив. Функция должна вернуть
// "настоящую длинну массива" Пример: [1,2,3,4,5] => 5
//                [1,2,3,4, ... пустота... 10] => 5
// Используйте один из перебирающих методов массивов.

function trueLength (array) {
  const arrLength = array.filter(function(element) {
    return (element > 0);  // если true
  })
    return arrLength.length;
};
console.log(trueLength([1,2,3,4,null,undefined,10])); // 5


// 2. Функция принимает массив покупок вида
// { name: "Морковь", amount: 3, price: 2.50 }.
// Функция должна вернуть сумму всех покупок.
// Используйте один из перебирающих методов массивов

const cart = [{
  id: 1,
  name: "Морковь",
  price: 2.50,
},{
  id: 2,
  name: "Картофель",
  price: 1.50,
},{
  id: 3,
  name: "Свекла",
  price: 2.00,
},{
  id: 4,
  name: "Фасоль",
  price: 3.50,
}];

let result = 0;

function calculateCart(items) {
  let resultPrice = cart.filter((item) => {
      result += item.price;
  });
  return result;
};
console.log( calculateCart(cart));


// 3. Функция принимает массив покупок вида
// { id: 1, name: "Морковь", amount: 3, price: 2.50 } и id продукта.
// Функция должна вернуть цену этого продукта.

const cart = [{
  id: 1,
  name: "Морковь",
  amount: 3,
  price: 2.50,
  category: "vegetables",
},{
  id: 2,
  name: "Картофель",
  amount: 8,
  price: 1.50,
  category: "vegetables",
},{
  id: 3,
  name: "Свекла",
  amount: 4,
  price: 2.00,
  category: "vegetables",
},{
  id: 4,
  name: "Фасоль",
  amount: 2,
  price: 3.50,
  category: "vegetables",
}];

let price;
function findPriceById(id, items) {
  let resultPrice = cart.filter((item) => {
      if (item.id == 2) {
         price = item.price;
      }
  });
  return price;
};
console.log( findPriceById(2, cart));  // 1,5


// 4. Функция принимает массив покупок вида
// { id: 1, name: "Морковь", amount: 3, price: 2.50, category: ‘vegetables’ }
// и название категории. Функция должна вернуть продукты только данной категории.

const cart = [{
  id: 1,
  name: "Морковь",
  amount: 3,
  price: 2.50,
  category: "vegetables",
},{
  id: 2,
  name: "Яблоко",
  amount: 8,
  price: 1.50,
  category: "fruits",
},{
  id: 3,
  name: "Свекла",
  amount: 4,
  price: 2.00,
  category: "vegetables",
},{
  id: 4,
  name: "Груша",
  amount: 2,
  price: 3.50,
  category: "fruits",
}];

function filterByCategory(category, items) {
  let resultCategory = cart.filter((item) => {
        if (item.category == category) {
           return item;
        };
    });
    return resultCategory;
  };
console.log( filterByCategory("vegetables", cart)); // Возвращает два объекта массива, содержащие категорию "vegetables"


// 5. Написать функцию, которая сравнивает 2 массива с примитивами (строки, числа).
// Массивы [1,2,3] и [1, 3, 2] равны так как содержат одни и те же элементы.
// Функция должна вернуть true, если они равны и false если нет.

let arr1 = [1, "зима", 3];
let arr2 = [1, "лето" ,3];

function compareArrays(arr1, arr2) {
   return !(arr1 < arr2 || arr2 < arr1);
};
console.log( compareArrays(arr1, arr2)); // false


// 6. Функция принимает произвольный двумерный массив.
// Пример [[1, 2, 3], [4, 5], [6]]
// Функция должна вернуть сумму его элементов.

let arr = [[1, 2, 3], [4, 5], [6]];
let result = 0;
let sumArr = 0;

function compareArrays(numberArray) {
  for (let i = arr.length; i--;) {
    if (typeof(arr[i]) == 'number') {
      //result.push(arr[i]);
      result += +arr[i];
    }
    for (let j = arr.length; j--;) {
      if (typeof(arr[i][j]) == 'number') {
        //result.push(arr[i][j]);
        result += +arr[i][j];
      };
    };
  };
};

compareArrays(arr);
console.log(result);


// 7. Заполнить элементы побочной диагонали матрицы 1,
// а все остальные 0.

const arr = [];

for(let i = 0; i<=5; i++) {
  arr[i] = [];
  for(let j = 0; j<=5; j++) {
    arr[i][j] = i + j === 5? 1 : 0;
  };
};
console.table(arr);
