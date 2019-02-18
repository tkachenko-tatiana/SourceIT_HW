'use strict'

// Task 1 ==============================================
const trueLength = (array) => {
  let newArray = array.filter((n) => {
    return n >= 0 || n <= 0;
  })
  return newArray;
};

console.log(trueLength([1, 2, 3, -4, , , , 10]));

// Task 2 ==============================================
const calculateCart = (items) => {
  let sumCart = 0;
  items.forEach((i) => sumCart += i.price);
  return sumCart;
};

console.log(calculateCart([
  { name: "Морковь", amount: 3, price: 2.50 },
  { name: "Картошка", amount: 3, price: 1.10 },
  { name: "Помидоры", amount: 3, price: 9.60 },
  { name: "Огурцы", amount: 3, price: 5.25 }
]));

// Task 3 ==============================================
const findPriceById = (id, items) => {
  let itemId = [];
  items.filter((i) => {
    if (i.id == id) {
      itemId = i;
    };
  });
  return itemId;
};

console.log(findPriceById(2, [
  { id: 1, name: "Морковь", amount: 3, price: 2.50 },
  { id: 2, name: "Картошка", amount: 3, price: 1.10 },
  { id: 3, name: "Помидоры", amount: 3, price: 9.60 },
  { id: 4, name: "Огурцы", amount: 3, price: 5.25 }
]));

// Task 4 ==============================================
const filterByCategory = (category, items) => {
  let itemCategory = [];
  items.filter((i) => {
    if (i.category == category) {
      itemCategory.push(i);
    };
  });
  return itemCategory;
};

console.log(filterByCategory("fruits", [
  { id: 1, name: "Морковь", amount: 3, price: 2.50, category: "vegetables" },
  { id: 2, name: "Помидоры", amount: 3, price: 9.60, category: "vegetables" },
  { id: 3, name: "Бананы", amount: 3, price: 24.90, category: "fruits" },
  { id: 4, name: "Яблоки", amount: 3, price: 10.50, category: "fruits" }
]));

// Task 5 ==============================================
const compareArrays = (arr1, arr2) => {
  if (arr1.sort().join() == arr2.sort().join()) {
    console.log(arr1, " = ", arr2);
    return true;
  } else {
    console.log(arr1, " != ", arr2);
    return false;
  };
}

console.log(compareArrays([1, 2, 3, 'lala', 4, 14, 15], [1, 15, 3, 14, 2, 4, 'lala']));

// Task 6 ==============================================
const sum = (arr) => {
  let sumArray = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sumArray += arr[i][j];
    }
  }
  return sumArray;
}

console.log(sum([[1, 2, 3, 4], [5, 6], [7]]));

// Task 7 ==============================================
const arrSide = [];
for (let i = 0; i <= 5; i++) {
  arrSide[i] = [];
  for (let j = 0; j <= 5; j++) {
    arrSide[i][j] = i === j ? 1 : 0;
  }
}
arrSide.reverse();

console.table(arrSide);