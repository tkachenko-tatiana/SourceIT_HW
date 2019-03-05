'use strict'

console.log("task_1");

function trueLength (array) {
    let length = 0;
    array.forEach(element => {
        if (element !== undefined && element !== null) {
            length += 1
        }
       return length; 
    });
    return length;
}

let arr_1 = [1, 3, 6, 47, 243, 87, 42, 6];
arr_1[15] = 67;
console.log(arr_1)
console.log(trueLength(arr_1));

console.log("=========================================================================================");

console.log("task_2");

let list = [{name: "Морковь",
            amount: 3,
            price: 2.5
            },
            {name: "Яблоки",
            amount: 5,
            price: 15
            },
            {name: "Яйца",
            amount: 30,
            price: 20
            },
            {name: "Мясо",
            amount: 1,
            price: 70
            }
        ];
      
function calculateCart(items) {
    let sum = items.reduce(function (prev, value) {
        return prev + value.price;
    }, 0)
    return sum;
}
console.log("Сумма покупок составила: " + calculateCart(list));

console.log("=========================================================================================");

console.log("task_3");

let list_3 = [{name: "Морковь",
              id: 1,
              amount: 3,
              price: 2.5
              },
              {name: "Яблоки",
              id: 2,
              amount: 5,
              price: 15
              },
              {name: "Яйца",
              id: 3,
              amount: 30,
              price: 20
              },
              {name: "Мясо",
              id: 4,
              amount: 1,
              price: 70
              }
            ];
    function findPriceById (id, items) {
      let arr = items.find( (item) => {
          return item.id === id;
         })
        return arr.price;
        };
console.log(findPriceById(2, list_3));

console.log("=========================================================================================");

console.log("task_4");

let list_4 = [{name: "Морковь",
              id: 1,
              amount: 3,
              price: 2.5,
              category: "vegetables"
              },
              {name: "Яблоки",
              id: 2,
              amount: 5,
              price: 15
              },
              {name: "Яйца",
              id: 3,
              amount: 30,
              price: 20,
              category: "vegetables"
              },
              {name: "Мясо",
              id: 4,
              amount: 1,
              price: 70
              }
            ];
    function filterByCategory (category, items) {
      let arr = items.filter((item)=> {
        return item.category === category;
      });
      return arr;
    }
console.log(filterByCategory("vegetables", list_4));

console.log("=========================================================================================");

// console.log("task_5");


//     function compareArrays (arr1, arr2) {
//       if()
//     }

// console.log("=========================================================================================");


