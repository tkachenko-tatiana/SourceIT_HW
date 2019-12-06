function randomInteger() {
	let arr = [];
	return function() {
		let randomNumber = Math.ceil(Math.random() * 10);

 		if (arr.includes(randomNumber)) {
			console.log('-');
			return arr;
		} else {
			arr.push(randomNumber);
		}
		console.log(arr);
	}
}
let randomIntegerGenerator = randomInteger();