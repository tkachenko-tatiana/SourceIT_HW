function makeBuffer() {
    let someStorage;

     return function storeData(value) {
        storeData.reset = () => {
            someStorage = undefined;
            console.log(12)
        };

         return value ? someStorage = value : someStorage
    }
}

 let buffer = makeBuffer();