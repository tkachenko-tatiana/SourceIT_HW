function randomNum() {
    let arr = [];
    let result = ()=>{
        let randNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        if (arr.includes(randNum)) {
            return arr;
        } else {
            arr.push(randNum);
            return randNum;
        }

    }
    return result;
}

let res = randomNum();
console.log(res());
console.log(res());
console.log(res());
console.log(res());
console.log(res());
console.log(res());
console.log(res());
console.log(res());
console.log(res());
console.log(res());
console.log(res());
console.log(res());
console.log(res());
