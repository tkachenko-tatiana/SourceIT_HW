 function callWithTimer(func) {
    // your magic!
    return function (){
        console.time('Duration');
        let ress = func();
        console.timeEnd('Duration');
        return ress;
    }
    }


   function test() {
    const arr = new Array(500).fill('test');

    const newArr = arr.map((el, index) => `${el} ${index}`);
    return newArr;
   }

   const testFunctionWrapper = callWithTimer(test);
   const result = testFunctionWrapper();

   console.log('result: ', result);

