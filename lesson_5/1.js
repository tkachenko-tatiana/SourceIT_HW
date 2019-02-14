
function calcNum(num) {
	let res=0;
	let arr= String(num);
	for (i=0; i<arr.length;i++){
		res += Number(arr[i]);
	}
	return res;
}

const sum = calcNum(111);
console.log(sum);
