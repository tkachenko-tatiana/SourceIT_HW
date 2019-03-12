'use strict'
  function callWithTimer(func) {
    console.time('label');
    testFunction();
    console.timeEnd('label');
  return testFunction();
}

  function testFunction() {
    const arr = new Array(500).fill('test');
    const newArr = arr.map((el, index) => `${el}_${index}`);
  return newArr;
}

    const testFunctionWrapper = callWithTimer();
    const result = testFunctionWrapper;

  console.log('result: ', result)
