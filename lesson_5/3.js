
function joinArrays(arr1,arr2){
	let arr3 =arr1.concat(arr2);
	return arr3;
}

const newArray=joinArrays([1,2,3], [4,5,6]);

console.log(newArray);