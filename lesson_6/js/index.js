'use strict'

/*Матрица*/
let arr = [];
for (let i = 0; i < 4; i++) {
	let newArr = [];
	arr.push(newArr);
	for (let j = 0; j < 4; j++) {
		if (i == 3 && j == 0) {
			newArr.push("1");
		} else if (i == 2 && j == 1) {
			newArr.push("1");
		} else if (i == 1 && j == 2) {
			newArr.push("1");
		} else if (i == 0 && j == 3) {
			newArr.push("1");
		}
		else {
			newArr.push("0");
		}
	}
}
console.table(arr);