function callWithTimer(func) {
	return function() {
		console.time('Время выполнения');
		let result = func();
		console.timeEnd('Время выполнения');
		return result;
	}
}

 function testFunction() {
 const arr = new Array(500).fill('');
 const newArr = arr.map((el, index) => `${el}_${index}`);
 return newArr;
}

 const testFunctionWrapper = callWithTimer(testFunction);
const result = testFunctionWrapper();

 console.log('result: ', result)