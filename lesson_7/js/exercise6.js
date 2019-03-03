function sum(arr) {
    let res = 0;
    for(let i = 0;i < arr.length; i++) {
        for( j = 0; j < arr[i].length; j++){
            res += arr[i][j];
        }
    }
    return res;
}
let arr = [[1,2,3], [4,5], [6]];
console.log("Сумма всех элементов массива равна:" , sum(arr));