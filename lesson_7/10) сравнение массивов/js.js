let arr1 = [ 'Дима', 'Катя', 'Алина', 21 , true];

let arr2 = [ 21, 'Алина', 'Дима', true, 'Катя'];

function equal (arr1,arr2){
	if(arr1.length!= arr2.length){
		console.log('False')
	}
	let count = 0;

	for(let i = 0; i < arr1.length; i++){
		for(let j = 0; j < arr2.length;j++){
			if(arr1[i] === arr2[j]){
				count++
			}
		}
	}
	if(count == arr2.length){
		console.log('true')
	} else{
		console.log('false')
	}
}

equal(arr1,arr2);