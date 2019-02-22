let arr = [{        // объявляем массив из объектов
  id: 1,
  name: "Иван",
  age: 42
}, {
  id: 2,
  name: "Сергей",
  age: 23
}, {
  id: 3,
  name: "Олег",
  age: 16
}, {
  id: 4,
  name: "Марина",
  age: 19
}];

function sort(arr) {  //создаем функцию sort
  let newArr = [];  // задаем пустой массив, куда в дальнейшем добавим свой результат

  for (let i = 0; i < arr.length; i++) {  //создаем цикл, для того , чтобы пройти по каждому элементу массива
      if (arr[i].age >= 18) {  // условие, которое удовлетворяет условию, где свойство age будет >= 18
          newArr.push(arr[i]); // с помощью метода push добавляем результат в ранее указанный пустой массив
      }
  }
  newArr.forEach(function(element) { 
    console.log('name: ', element.name);  // методом forEach перебираем массив и указывает в console.log вывод только свойства "name"
  });
  return newArr;  // возвращаем значение newArr
}

const arrName = sort(arr);  // объявляем константу arrName (массив имен) и присваиваем ей вызов функции


