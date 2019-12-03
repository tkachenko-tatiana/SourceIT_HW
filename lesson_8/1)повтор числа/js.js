function func(){
	const arr = [];
	return function(){
		const num = arr.push(Math.floor(Math.random()*10)+1);
		
		for(let i = 0; i<arr.length; i++){
			if(arr[i] === num){
				console.log(arr)

			} else{
				console.log("числа нет")
			}
				
		}

	}

}

const make = func();
console.log(make())
console.log(make())
console.log(make())
