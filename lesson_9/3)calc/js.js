function calc(){
	let num1;
	let num2;

	return{
		input:()=>{
			num1 = +prompt('Первое число');
			num2 = +prompt('Второе число')
		},
		sum:()=>{
			console.log(num1+num2)
		},
		mul:()=>{
			console.log(num1 * num2)
		},
		sub:()=>{
			console.log(num1-num2)
		}
		

			}
	
}




let calculator = calc();

calculator.input()
calculator.sum()
calculator.mul()
calculator.sub()