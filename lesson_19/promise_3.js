const firstSquare = (num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const firstSquarePow = num * num;
        resolve(firstSquarePow);
      }, 2000);
    })
  };

  const secondSquare = (res) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const secondSquarePow = res * res;
        resolve(secondSquarePow);
      }, 2000);
    })
  };

 function squarePow(num) {
    return firstSquare(num)
      .then((firstSquarePow) => {
        console.log(`Square of ${num} = `,firstSquarePow);
        return secondSquare(firstSquarePow);
      }).then((secondSquarePow) => {
        console.log('Square of previous result =', secondSquarePow);
      })
  }

  squarePow(3);
  