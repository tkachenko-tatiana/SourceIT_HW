function randomNumberHandler() {
    let random = Math.round(Math.random() * 10);
    console.log(random);
    let promise = new Promise((resolve, reject) => {
        
        if (random <= 5) {
            setTimeout(() => {
                resolve();
            }, random * 1000);
        } else if (random >= 6) {
            setTimeout(() => {
                reject(new Error("число больше 5!"));
            }, random * 1000);
        }
    });

    promise
        .then(
            result => alert("Успешно: число от 1 до 5"),
            error => alert("Провал: " + error.message) // Rejected: время вышло!
        );


}
randomNumberHandler();