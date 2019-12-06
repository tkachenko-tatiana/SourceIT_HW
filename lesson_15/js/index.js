function randomNumberHandler() {
    let randomNumber = Math.ceil(Math.random() * 10);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomNumber <= 5) {
                resolve();
            } else {
                reject();
            }
        }, randomNumber * 1000)
    });

 }