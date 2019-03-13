function sequence(start, step) {
    let num = 0;
    const stepGenerator = ()=>{
        if (step == undefined)
            return step = 1;
        if (step >= num) {
            num += step;
            return start + (num - step);
        } else {
            return start + num;
        }
    }
    return stepGenerator;
}

const generator = sequence(10, 3);
const generator2 = sequence(7, 1);

console.log(generator());
console.log(generator());
console.log(generator2());
console.log(generator());
console.log(generator2());
