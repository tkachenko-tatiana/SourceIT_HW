
function upInSquare(number){
	let firstNumber;
	let secondNumber;
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(firstNumber = number ** number)
			console.log(firstNumber)
		},3000)
	})

	.then(function() {
		setTimeout(()=>{
			secondNumber = firstNumber**firstNumber
			console.log(secondNumber)
		},3000)
	})
}

upInSquare(2)
