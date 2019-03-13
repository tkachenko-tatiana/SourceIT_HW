let timers = {};

function callWithTimer(func, timer) {
    return function() {
        let start = performance.now();
        let result = func.apply(this, arguments);
        if (!timers[timer]) timers[timer] = 0;
        timers[timer] += performance.now() - start; //подсмотрела у Кантора
        console.time('Duration'); // не разобралась как посчитать время выполнения функции
        console.timeEnd('Duration'); 
        return result;
    }
}


function testFunction() {
    const arr = new Array(500).fill('test');
    const newArr = arr.map((el, index) => `${el}_${index}`);
    return newArr;
}


const testFunctionWrapper = callWithTimer(testFunction);
const result = testFunctionWrapper();

console.log('result: ', result);;