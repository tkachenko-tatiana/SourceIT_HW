function squarePow(num) {
    new Promise(resolve => {
        setTimeout(() => {
            resolve(console.log(num **= 2));
        }, 3000);
    }).then(() => {
        setTimeout(() => {
            console.log(num ** 2)
        }, 3000)
    })
}