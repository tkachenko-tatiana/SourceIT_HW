// let date = '2025-12-31';

// function convertDate(date){
// 	console.log((year , month, date));
// 	return date;
// }

// convertDate(2025-12-31);

let date = '2025-12-31';
function convertDate(date){
	date = date.replace(/-/g, '.').split('.').reverse().join('.');
	console.log(date)
}

convertDate(date)


