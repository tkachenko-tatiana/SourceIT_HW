'use strict'
let apartmentNumber = prompt('введите номер квартиры', '');

	if (1 <= apartmentNumber && apartmentNumber <= 20){
	alert ('Эта квартира находится в первом подъезде')
}
	else if  (apartmentNumber <= 48 && apartmentNumber >= 21 ){
	alert ('Эта квартира находится во втором подъезде')
}
	else if (apartmentNumber <= 90 && apartmentNumber >= 49){
	alert ('Эта квартира находится в третьем подъезде')
}
	else if (apartmentNumber > 91){
	alert ('Такой квартиы нет в этом доме')
}