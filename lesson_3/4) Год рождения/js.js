let age = +prompt("Введи год своего рождения");

if(age!==null && age!=""){
	let birthYear = 2019 - age;
	alert("Тебе " + birthYear);

if( birthYear >= 16){
	alert('Добро Пожаловать');
} else{
	alert("Вход воспрещен");
}
}