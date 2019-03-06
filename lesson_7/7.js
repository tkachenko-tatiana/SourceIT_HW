
const arr = [];
for (let i = 0; i < 5; i++) {
  let subArr = [];
  for (let j = 0; j < 5; j++) {
    if (i === 5 - 1 - j) {
      subArr[j] = 1;
    }
    else {
      subArr[j] = 0;
    }
  }
  arr.push(subArr);
}
console.table(arr);