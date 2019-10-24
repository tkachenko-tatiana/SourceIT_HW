let x = +prompt("Введи число");

if(x < -2){
	alert(3*(x*x)-8);
} else if(-2 <= x && x <= 4){
	alert( -9*(x*x) -12);
} else{
	alert(32 + x);
}