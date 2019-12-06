function makeSpyOn() {
    let num = 0;
    return function myFunc() {
        myFunc.calls = ++num;
    }
}

 const spy = makeSpyOn();
 