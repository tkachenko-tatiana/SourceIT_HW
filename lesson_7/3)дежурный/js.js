function getRandom(names){

	let index = Math.floor(Math.random() * names.length);
	return names[index];
}

let names = ['Дима','Алина','Илья','Леся'];
let randomNames = getRandom(names);
alert(`${randomNames} сегодня дежурный в классе`);

