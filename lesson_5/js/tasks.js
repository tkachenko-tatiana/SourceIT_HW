'use strict'
/*first exercise*/
function calcNum(num) {
	let base = 0;
	num = num + ""  ;
	for (var i = 0; i < num.length-1; i++) {
		base = base + +num[i]
	}
	return(base) 
}
calcNum(135)
/*second exercise*/
function calcNum (num) {
	let base = 0;
    num = num + "";
    for (let i = 0; i <= num.length-1; i++) {
        base = base+ +num[i];
    }
    while(base> 10) {
        base= calcNum(base);
    }
    return base;
}
calcNum(666);
/*third exercise*/
function joinArrays(arr1,arr2) {
 const arr3=[...arr1,...arr2]
 return(arr3);
}
joinArrays([1,2,3],[4,5,6])


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

	/* exercise 6*/

let AddArr = function () {
	let sum = [];
	let i ;
	for (i = 0; i < arguments.length; i++) {
		sum.push(...arguments[i]);
	};
	console.log(sum);
}
AddArr([1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15],[16,17,18],'bingo!!!')


/*exercise 7*/
/*first example)*/
function AddBrackets(str){
let bracket = 0;
for (var i = 0; i <= str.length; i++) {
	if (str[i] == "(" || str[i] == "[" || str[i] == "{") {
		bracket++;
	} else if (str[i] == ")" || str[i] == "]" || str[i] == "}") {
		bracket++;
	}
}
if(bracket == 0) {
            console.log(true);
        } else {
            console.log(false);
        }
}
AddBrackets("[(( 1 + 2) * 5) + (42).toString()}")





	










	