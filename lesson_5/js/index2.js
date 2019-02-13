function calcNum (num) {
    num += "";
    let sum = 0;
    for (let i = 0; i <= num.length-1; i++) {
        sum = sum + +num[i];
    }
    if (sum >= 10) {
        sum = calcNum(sum);
    }
    return sum;
}

console.log(calcNum(4599999999967));
console.log("=========================================================================");