function makeBuffer(){
	let arr = "";


	 return function (text){
		if(arguments.length == 0){
			return arr;
		}
		else {
			arr += text;
		} 

	buffer.delete = function(){
		arr = ''
	}
}
}

let buffer = makeBuffer();
buffer('Замыкания ');
buffer('Использовать ');
buffer('Нужно!');
console.log(buffer());
buffer.delete();
console.log(buffer());