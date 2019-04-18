  function randomNumberHandler() {
    return new Promise((resolve, reject) => {
      let randNum = Math.floor(Math.random() * (11 - 1)) + 1; 
      if(randNum < 6) {
        setTimeout(() => {
          const result = `Hello, my friend! Your random number is ${randNum}`;
          resolve(result);
        }, randNum * 1000);
      } else {
        const error =  `ERROR!!! Because your random number up to 5 and equally ${randNum}`;
        reject(error);
      }
    })
  }

const res = () => {
    randomNumberHandler().then((result) => {
      alert(result);
    }).catch((error) => {
      alert(error);
    });
 }

res();
