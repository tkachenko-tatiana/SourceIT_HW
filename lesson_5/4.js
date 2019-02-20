
function getEvenElements (arr){
	let arr2=[];
	for (i=0; i < arr.length; i++){
		if(arr[i] % 2 == 0){
			arr2.push(arr[i]);	
	}
}
return arr2;
}
let res = getEvenElements([1,2,3,4,5]); //[2,4]
console.log(res);

