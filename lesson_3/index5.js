'use strict'
let x = prompt('введите значение для x', '');
let y;

	if (x < -2){
	y = (x*x*3)-8
}
	else if  (x >= -2 && x <= 4){
	y = (x*x*(-9))-12
}
	else if (x >= 5){
	y = ((32) + x)
}
	alert (y);