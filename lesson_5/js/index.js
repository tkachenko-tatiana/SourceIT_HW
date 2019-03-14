// Написать функцию, которая складывает цифры числа. 

let a = prompt('Введите число', '');
function calcNum(num) {
  for (var s = a, b = 0; +a > 0; b += a % 10, a = Math.floor (a / 10)); 
  alert(' Сумма цифр числа ' + s + ' равна ' + b);
  console.log(' Сумма цифр числа ' + s + ' равна ' + b);
}
const sum = calcNum ();



// Написать функцию, которая складывает цифры числа до тех пор пока не останется однозначное число и вернет его.
// Например: 196 => 1+9+6 = 16 (не однозначное) => 1 + 6 = 7 (однозначное).

function calcSingleNum(num) {
  let arr = String(num);
  let resArr = 0;

  for (var i = 0; i < arr.length; i++) {
      resArr += Number(arr[i]);
  }

  return resArr < 10 ? resArr : calcSingleNum(resArr);
}

const sumSingle = calcSingleNum(prompt('Введите число', ''));

console.log(' Oднозначное число ' + 'равно ' + sumSingle);
alert(' Oднозначное число ' + 'равно ' + sumSingle);



//Написать функцию которая принимает 2 массива и возвращает объединенный массив.

function joinArrays(arr1,arr2){
	let arr3 =arr1.concat(arr2);
	return arr3;
}

const newArray=joinArrays([1,2,3], [4,5,6]);

console.log(newArray); 
alert(newArray); 



//Написать функцию которая принимает массив и возвращает новый массив который содержит только четные элементы первого.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function getEvenNumbers(arr){
    let resArr = [];
    for (let i = 0; i < arr.length; i++){
        arr[i] % 2 === 0 ? resArr.push(arr[i]) : ''; 
    }
    return resArr;
}
console.log(getEvenNumbers(arr));
alert(getEvenNumbers(arr));




// Функция принимает массив объектов вида { id: 1, name: "Иван", age: 42 }
// Функция должна вернуть массив имён пользователей которым исполнилось 18 лет.

function adultUsers(users){
  let newArr = [];
  for (let i = 0; i < users.length; i++){
      if (users[i].age >= 18){
          newArr.push(users[i].userName);
      }
  }
  return newArr
}

let users = [{
  id: 1,
  userName: 'Иван',
  age: 42
},{
  id: 2,
  userName: 'Игорь',
  age: 31
},{
  id: 3,
  userName: 'Кристина',
  age: 12
},{
  id: 4,
  userName: 'Настя',
  age: 15
},{
  id: 5,
  userName: 'Вася',
  age: 18
},{
  id: 6,
  userName: 'Дима',
  age: 8
},{
  id: 7,
  userName: 'Алина',
  age: 22
}];

console.log(adultUsers(users)); 
alert(adultUsers(users)); 