
function calcNum(num) {
    let arr = String(num);
    let res = 0;

    for (var i = 0; i < arr.length; i++) {
        res += Number(arr[i]);
    }

    return res < 10 ? res : calcNum(res);
}

const sum = calcNum(159);
console.log(sum);
