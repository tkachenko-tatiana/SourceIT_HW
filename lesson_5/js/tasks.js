'use strict'
/*first exercise*/
function calcNum(num) {
	let a = 0;
	num = num + ""  ;
	for (var i = 0; i < num.length; i++) {
		a = a + +num[i]
	}
	console.log(a) 
}
const sum = calcNum(135)


/*second exercise*/
function calcNum(num) {
	let a = 0;
	num = num + ""  ;
	for (var i = 0; i < num.length; i++) {
		if(num>10){
			a = a + +num[i]
			console.log(calcNum(a))
		}
		else {
			a = a + +num[i]
				console.log(a) 
		}
	}
}
const sum = calcNum(72313)


/*third exercise*/
function joinArrays(arr1,arr2) {
 const arr3=[...arr1,...arr2]
 console.log(arr3)
}
const newArray = joinArrays([1,2,3],[4,5,6])


/*fourth exercise*/
function getEvenElements(arr) {
let new_arr=[];
for (let i = 0; i < arr.length; i++) {
	if (arr[i]%2==0){
		new_arr.push(arr[i]);
	}
}
console.log( new_arr);
}
getEvenElements([1,2,3,4,5])


/*fifth evercise*/

function adult_check(arr) {
	let adults=[];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].age>17){
			adults.push(arr[i].name);
		}
	}
	console.log(adults)
	}
	adult_check( [{ id: 1, name: "Severus", age: 42 }, 
                  { id: 2, name: "Albus", age: 88 }, 
                  { id: 3, name: "Arthur", age: 56 },
                  { id: 4, name: "Hermiona", age: 17 }, 
                  { id: 5, name: "Harry", age: 17}, 
                  { id: 6, name: "Ronald", age: 17 },
                  { id: 7, name: "Rubeus", age: 42 }, 
                  { id: 8, name: "Fred", age: 19 }, 
                  { id: 9, name: "George", age: 59 },])







	










	