let arr = [[1, 2, 3], [4, 5], [6]];
let result = [].concat(...arr);
let sum = 0;
function func(array){
	for(let i = 0; i<result.length;i++){
		sum +=result[i];
		
	}
	console.log(sum);
	}


func(result);