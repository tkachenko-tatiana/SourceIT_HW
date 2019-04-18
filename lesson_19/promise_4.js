const delay = () => {
  return new Promise((resolve) => {
    let randNum = Math.floor(Math.random() * (6 - 1)) + 1; 
      setTimeout(() => {
        resolve(randNum);
      }, randNum * 1000);
  });
 };
 
function sum (term1, term2, term3) {
  //your magic with Promise.all:)
  return Promise.all([term1(), term2(), term3()]).then(randNum => {
    console.log('Массив результатов: ',randNum);
    let res = 0;
    for(i = 0; i < randNum.length; i++) {
      res += randNum[i];
    }
    console.log('Сумма массива: ',res);
  }) 
}
sum(delay, delay, delay);