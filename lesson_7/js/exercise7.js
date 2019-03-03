const arr = [];
for(let i = 0; i <= 6; i++) {
    arr[i] = [];
    for(let j = 0; j <= 6; j++) {
        arr[i][6 - j] = i === j ? 1 : 0;
    }
}
console.table(arr);