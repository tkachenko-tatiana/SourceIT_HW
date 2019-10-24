function getSum(...args){
	let result = 0;
	for(let i = 0; i< args.length; i++){
		result +=args[i];

	}
	return result;
}

console.log(getSum(10,5,10,20,35));




